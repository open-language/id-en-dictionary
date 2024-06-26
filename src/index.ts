const wordnet = require("id-wordnet").default;
import Dictionary from "./dictionary";

const idDictionary = {
  init: async () => {
    const dictionary = new Dictionary(wordnet.get("1.2"));
    await dictionary.init();
    return dictionary;
  },
};

export default idDictionary;
