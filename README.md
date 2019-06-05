![](assets/wordnet-readme-logo.png)

Id-En-Dictonary is a node.js module which makes Indonesian words, their relations and english meanings available as a package.

## About

This packages uses the [Id-Wordnet](https://github.com/open-language/id-wordnet) and [En-Wordnet](https://github.com/open-language/en-wordnet) package to make the words, their meanings and relationships available to your node.js package. It also adds helper functions for other ways to access the information.

## Quick Start

You can install the package via `npm` or `yarn`

```
yarn add id-en-dictionary
```

Once it has been added, you need to initialize the dictionary, like so
```js
const dict = require('./index')

const start = async () => {
    const d = await dict.init()
    const result = d.query('mengerti')
    console.log(result)
}

start()
```

The dictionary can take about 4000ms to load the data in memory, it doesn't use an external database/redis yet (nor is that planned, since most queries take under 1ms, and the underlying data doesn't changes probably once a year)

### Query words

You can query for a single word with this syntax. If you want to use multiple words, replace the ` ` with `_`.
```js
let result = dict.query('mengerti')
result = dict.query('utama')
```

Here's a sample outlet that you can expect for the queries above

```json
{
  "588221": {
    "offset": 588221,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "mafhum, memafhumi, memahami, menambang, menangkap, mencekam, mencekau, mencengkam, mencungkil, mengarifi, mengarifkan, mengerti, menggayuk, menggerai, mengorek, mengorok, menjabat, faham",
    "glossary": [
      "get the meaning of something",
      "\"Do you comprehend the meaning of this letter?\""
    ],
    "englishWords": [
      "grok",
      "get_the_picture",
      "comprehend",
      "savvy",
      "dig",
      "grasp",
      "compass",
      "apprehend"
    ]
  },
  "588888": {
    "offset": 588888,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "mafhum, maklum, memafhumi, mengarifkan, mengetahui, memahami, memaklumi, mengarifi, mengerti, mengartikan, faham, reti",
    "glossary": [
      "know and comprehend the nature or meaning of",
      "\"She did not understand her husband\"",
      "\"I understand what she means\""
    ],
    "englishWords": [
      "understand"
    ]
  },
  "589738": {
    "offset": 589738,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "memahami, mengerti, faham",
    "glossary": [
      "grasp the meaning",
      "\"Can you follow her argument?\"",
      "\"When he lectures, I cannot follow\""
    ],
    "englishWords": [
      "follow"
    ]
  },
  "589904": {
    "offset": 589904,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "kian, menghidap, berjangkit, beroleh, memahami, membawa, memperoleh, menangkap, mendapat, mendapati, mendapatkan, mengambil, mengerti, meringkus, mengantongi",
    "glossary": [
      "grasp with the mind or develop an understanding of",
      "\"did you catch that allusion?\"",
      "\"We caught something of his theory in the lecture\"",
      "\"don't catch your meaning\"",
      "\"did you get it?\"",
      "\"She didn't get the joke\"",
      "\"I just don't get him\""
    ],
    "englishWords": [
      "catch",
      "get"
    ]
  },
  "590366": {
    "offset": 590366,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "memahami, mengerti",
    "glossary": [
      "understand, usually after some initial difficulty",
      "\"She didn't know what her classmates were plotting but finally caught on\""
    ],
    "englishWords": [
      "catch_on",
      "get_wise",
      "get_onto",
      "tumble",
      "latch_on",
      "cotton_on",
      "twig",
      "get_it"
    ]
  },
  "591115": {
    "offset": 591115,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "mafhum, maklum, melaksanakan, melihat, memafhumi, memaklumi, membayangkan, menerawang, mengarifkan, menginsafi, menjelmakan, menyaba, mewujudkan, nampak, ingat, memahami, mengarifi, mengerti, mengartikan, menyadari, faham, menaruh_mata, reti, taakul, ternampak-nampak",
    "glossary": [
      "perceive (an idea or situation) mentally",
      "\"Now I see!\"",
      "\"I just can't see your point\"",
      "\"Does she realize how important this decision is?\"",
      "\"I don't understand the idea\""
    ],
    "englishWords": [
      "understand",
      "realize",
      "realise",
      "see"
    ]
  },
  "593522": {
    "offset": 593522,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "mafhum, maklum, memafhumi, memaklumi, menamatkan, mengakhiri, mengarifi, mengarifkan, mengerti, menyimpulkan, mereka-reka, rasa, mengartikan, faham",
    "glossary": [
      "believe to be the case",
      "\"I understand you have no previous experience?\""
    ],
    "englishWords": [
      "understand",
      "infer"
    ]
  },
  "593852": {
    "offset": 593852,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "dengar, mafhum, maklum, memafhumi, memahami, memaklumi, membaca, menanggapi, mengarifi, mengarifkan, mengerti, menginterpretasikan, menafsirkan, menerjemahkan, mengartikan, terjemah, kefahaman, mentaksirkan, menterjemahkan",
    "glossary": [
      "make sense of a language",
      "\"She understands French\"",
      "\"Can you read Greek?\""
    ],
    "englishWords": [
      "understand",
      "read",
      "interpret",
      "translate"
    ]
  },
  "594058": {
    "offset": 594058,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "mafhum, memafhumi, mengarifi, mengarifkan, bersimpati, maklum, memahami, memaklumi, mengerti, mengartikan, bertimbang_rasa, faham, reti",
    "glossary": [
      "be understanding of",
      "\"You don't need to explain--I understand!\""
    ],
    "englishWords": [
      "sympathize",
      "sympathise",
      "empathize",
      "empathise",
      "understand"
    ]
  },
  "624476": {
    "offset": 624476,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "berhasil, jadi, makan, memahami, memasukkan, membaca, membawa, membutuhkan, mengambil, menganggap, mengarik, mengerti, meluwengkan, mentafsirkan",
    "glossary": [
      "interpret something in a certain way",
      "convey a particular meaning or impression",
      "\"I read this address as a satire\"",
      "\"How should I take this message?\"",
      "\"You can't take credit for this!\""
    ],
    "englishWords": [
      "take",
      "read"
    ]
  },
  "728617": {
    "offset": 728617,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "melaksanakan, mengarifi, mengarifkan, mengenal, mengerti, menginsafi, menjelmakan, mewujudkan, memaklumi, mengakui, menyadari, mengiktiraf, menyedari, sedar",
    "glossary": [
      "be fully aware or cognizant of"
    ],
    "englishWords": [
      "recognize",
      "recognise",
      "realize",
      "realise",
      "agnize",
      "agnise"
    ]
  },
  "2106506": {
    "offset": 2106506,
    "pos": "verb",
    "language": "Bahasa msa",
    "lemma": "mengerti",
    "isGood": true,
    "words": "mafhum, melihat, memafhumi, memahami, menangkap, mencerap, menganggap, mengarifkan, nampak, mengarifi, mengerti, merasa, faham, mempersepsi, menyedari",
    "glossary": [
      "to become aware of through the senses",
      "\"I could perceive the ship coming over the horizon\""
    ],
    "englishWords": [
      "perceive",
      "comprehend"
    ]
  }
}
```

```json
{
  "182571": {
    "offset": 182571,
    "pos": "noun",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "primer, utama",
    "glossary": [
      "a preliminary election where delegates or nominees are chosen"
    ],
    "englishWords": [
      "primary",
      "primary_election"
    ]
  },
  "579622": {
    "offset": 579622,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "gadang, gedang, paling_besar, longgar, terkemuka, terkenal, utama, besar, gede",
    "glossary": [
      "conspicuous in position or importance",
      "\"a big figure in the movement\"",
      "\"big man on campus\"",
      "\"he's very large in financial circles\"",
      "\"a prominent citizen\""
    ],
    "englishWords": [
      "big",
      "large",
      "prominent"
    ]
  },
  "656507": {
    "offset": 656507,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "penting, utama",
    "glossary": [
      "being of crucial importance",
      "\"a pivotal event\"",
      "\"Its pivotal location has also exposed it to periodic invasions\"- Henry Kissinger",
      "\"the polar events of this study\"",
      "\"a polar principal\""
    ],
    "englishWords": [
      "pivotal",
      "polar"
    ]
  },
  "730215": {
    "offset": 730215,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "baku, primer, utama",
    "glossary": [
      "(of a clause) capable of standing syntactically alone as a complete sentence",
      "\"the main (or independent) clause in a complex sentence has at least a subject and a verb\""
    ],
    "englishWords": [
      "independent",
      "main(a)"
    ]
  },
  "791227": {
    "offset": 791227,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "berpengaruh, berkuasa, dominan, menguasai, mustahak, utama",
    "glossary": [
      "exercising influence or control",
      "\"television plays a dominant role in molding public opinion\"",
      "\"the dominant partner in the marriage\""
    ],
    "englishWords": [
      "dominant"
    ]
  },
  "792202": {
    "offset": 792202,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "agung, berpengaruh, terutama, utama",
    "glossary": [
      "having superior power and influence",
      "\"the predominant mood among policy-makers is optimism\""
    ],
    "englishWords": [
      "overriding",
      "paramount",
      "predominant",
      "predominate",
      "preponderant",
      "preponderating"
    ]
  },
  "900616": {
    "offset": 900616,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "asas, penting, perlu, pokok, utama",
    "glossary": [
      "basic and fundamental",
      "\"the essential feature\""
    ],
    "englishWords": [
      "essential"
    ]
  },
  "901060": {
    "offset": 901060,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "asas, dasar, fundamental, rendah, utama",
    "glossary": [
      "of primary importance"
    ],
    "englishWords": [
      "basal",
      "primary"
    ]
  },
  "901826": {
    "offset": 901826,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "asasi, ruji, utama",
    "glossary": [
      "necessary or important, especially regarding food or commodities",
      "\"wheat is a staple crop\""
    ],
    "englishWords": [
      "staple"
    ]
  },
  "1012855": {
    "offset": 1012855,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "perdana, terutama, ulung, utama",
    "glossary": [
      "preceding all others in time",
      "\"the premiere showing\""
    ],
    "englishWords": [
      "premier",
      "premiere"
    ]
  },
  "1277097": {
    "offset": 1277097,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "asas, dasar, penting, pokok, pusat, terutama, utama",
    "glossary": [
      "serving as an essential component",
      "\"a cardinal rule\"",
      "\"the central cause of the problem\"",
      "\"an example that was fundamental to the argument\"",
      "\"computers are fundamental to modern industrial structure\""
    ],
    "englishWords": [
      "cardinal",
      "central",
      "fundamental",
      "key",
      "primal"
    ]
  },
  "1277426": {
    "offset": 1277426,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "primer, utama",
    "glossary": [
      "most important element",
      "\"the chief aim of living\"",
      "\"the main doors were of solid glass\"",
      "\"the principal rivers of America\"",
      "\"the principal example\"",
      "\"policemen were primary targets\"",
      "\"the master bedroom\"",
      "\"a master switch\""
    ],
    "englishWords": [
      "chief(a)",
      "main(a)",
      "primary(a)",
      "principal(a)",
      "master(a)"
    ]
  },
  "1471002": {
    "offset": 1471002,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "utama",
    "glossary": [
      "greater in number or size or amount",
      "\"a major portion (a majority) of the population\"",
      "\"Ursa Major\"",
      "\"a major portion of the winnings\""
    ],
    "englishWords": [
      "major"
    ]
  },
  "1471538": {
    "offset": 1471538,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "penting, utama",
    "glossary": [
      "greater in scope or effect",
      "\"a major contribution\"",
      "\"a major improvement\"",
      "\"a major break with tradition\"",
      "\"a major misunderstanding\""
    ],
    "englishWords": [
      "major"
    ]
  },
  "1472628": {
    "offset": 1472628,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "utama",
    "glossary": [
      "of greater importance or stature or rank",
      "\"a major artist\"",
      "\"a major role\"",
      "\"major highways\""
    ],
    "englishWords": [
      "major"
    ]
  },
  "1852174": {
    "offset": 1852174,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "julung, utama",
    "glossary": [
      "of first rank or importance or value",
      "direct and immediate rather than secondary",
      "\"primary goals\"",
      "\"a primary effect\"",
      "\"primary sources\"",
      "\"a primary interest\""
    ],
    "englishWords": [
      "primary"
    ]
  },
  "2162934": {
    "offset": 2162934,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "asasi, utama",
    "glossary": [
      "far-reaching and thoroughgoing in effect especially on the nature of something",
      "\"the fundamental revolution in human values that has occurred\"",
      "\"the book underwent fundamental changes\"",
      "\"committed the fundamental error of confusing spending with extravagance\"",
      "\"profound social changes\""
    ],
    "englishWords": [
      "fundamental",
      "profound"
    ]
  },
  "2338615": {
    "offset": 2338615,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "atasan, dangkal, superior, tinggi, ulung, unggul, utama",
    "glossary": [
      "of or characteristic of high rank or importance",
      "\"a superior ruler\""
    ],
    "englishWords": [
      "superior"
    ]
  },
  "2339120": {
    "offset": 2339120,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "lantang, luhur, mulia, terbilang, terkemuka, tinggi, unggul, utama, taala",
    "glossary": [
      "standing above others in quality or position",
      "\"people in high places\"",
      "\"the high priest\"",
      "\"eminent members of the community\""
    ],
    "englishWords": [
      "eminent",
      "high"
    ]
  },
  "2439949": {
    "offset": 2439949,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "top, utama",
    "glossary": [
      "situated at the top or highest position",
      "\"the top shelf\""
    ],
    "englishWords": [
      "top(a)"
    ]
  },
  "2719395": {
    "offset": 2719395,
    "pos": "adjective",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "alamiah, anasir, asasi, dasar, utama",
    "glossary": [
      "relating to or being an element",
      "\"elemental sulphur\""
    ],
    "englishWords": [
      "elemental"
    ]
  },
  "6492188": {
    "offset": 6492188,
    "pos": "noun",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "utama",
    "glossary": [
      "a list of words or phrases that explain symbols or abbreviations"
    ],
    "englishWords": [
      "key"
    ]
  },
  "10474645": {
    "offset": 10474645,
    "pos": "noun",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "hop, ketua, komendur, masyaikh, mudir, pembibit, pengarah, sep, tekong, tua-tua, guru_besar, pengetua, utama",
    "glossary": [
      "the educator who has executive authority for a school",
      "\"she sent unruly pupils to see the principal\""
    ],
    "englishWords": [
      "principal",
      "school_principal",
      "head_teacher",
      "head"
    ]
  },
  "10648696": {
    "offset": 10648696,
    "pos": "noun",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "guru_besar, mudir, pengetua, aktor, bintang, utama",
    "glossary": [
      "an actor who plays a principal role"
    ],
    "englishWords": [
      "star",
      "principal",
      "lead"
    ]
  },
  "13949802": {
    "offset": 13949802,
    "pos": "noun",
    "language": "Bahasa msa",
    "lemma": "utama",
    "isGood": true,
    "words": "utama, keutamaan, preseden, prioritas, prioriti",
    "glossary": [
      "status established in order of importance or urgency",
      "\"...its precedence as the world's leading manufacturer of pharmaceuticals\"",
      "\"national independence takes priority over class struggle\""
    ],
    "englishWords": [
      "precedence",
      "precedency",
      "priority"
    ]
  }
}
```

## Is this credible?

We currently rely [Bahasa Wordnet](http://wn-msa.sourceforge.net/index.eng.html) and Version 3.0 of [Princeton University's Wordnet](https://wordnet.princeton.edu/). Both of these are probably the most well know open wordnets. You can find other [open wordnets here](http://compling.hss.ntu.edu.sg/omw/)

## Credits

- [TJ Holowaychuk](https://github.com/tj) for showing us how to use black and white beautifully to create the image on the top of the readme. Inspiration from [apex/up](https://github.com/apex/up)
- [Bahasa Wordnet](http://wn-msa.sourceforge.net/index.eng.html) and [Princeton Univerysity's Wordnet](https://wordnet.princeton.edu/) for bringing so much sanity in the world