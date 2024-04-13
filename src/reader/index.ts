import readline from "readline";
import fs from "fs";
import Database from "../database";
import DefinitionLine from "../parser/definition.line";
import AllLine from "../parser/all.line";

class Reader {
  isReady: boolean;
  fileTypes: string[];
  readRemaining: number;
  db: Database;

  constructor(db: any) {
    this.isReady = false;
    this.readRemaining = 2;
    this.fileTypes = ["wn-ind-def.tab", "wn-msa-all.tab"];
    this.db = db;
  }

  async init() {
    return new Promise((resolve) => {
      this.fileTypes.forEach((fileType) => {
        const file = `${this.db.path}/${fileType}`;
        const readerInterface = readline.createInterface({
          input: fs.createReadStream(file),
          output: undefined,
        });

        readerInterface.on("line", (line) => {
          if (fileType === "wn-ind-def.tab") {
            const item = new DefinitionLine().parse(line);
            this.db.addDefinition(item);
          } else {
            const item = new AllLine().parse(line);
            if (item.isGood) {
              this.db.addIndex(item);
            }
          }
        });

        readerInterface.on("close", () => {
          this.readRemaining -= 1;
          if (this.readRemaining === 0) {
            this.isReady = true;
            this.db.markReady();
            resolve("");
          }
        });

        // Ignoring close, pause, resume, SIGCONT, SIGINT, SIGTSTP
      });
    });
  }
}

export default Reader;
