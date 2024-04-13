import AllLine from "./all.line";

describe("Test parsing an all line", () => {
  test("Parse an all line", () => {
    let item = new AllLine().parse("00001740-a	B	L	paling berkebolehan");
    expect(item.offset).toBe(1740);
    expect(item.pos).toBe("adjective");
    expect(item.language).toBe("Bahasa msa");
    expect(item.isGood).toBe(false);
    expect(item.lemma).toBe("paling_berkebolehan");

    item = new AllLine().parse("00002956-a	I	O	terutama mengenai otot");
    expect(item.offset).toBe(2956);
    expect(item.pos).toBe("adjective");
    expect(item.language).toBe("Indonesian ind");
    expect(item.isGood).toBe(true);
    expect(item.lemma).toBe("terutama_mengenai_otot");

    item = new AllLine().parse("00004492-v	B	L	milik");
    expect(item.offset).toBe(4492);
    expect(item.pos).toBe("verb");
    expect(item.language).toBe("Bahasa msa");
    expect(item.isGood).toBe(false);
    expect(item.lemma).toBe("milik");
  });
});
