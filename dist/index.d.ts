// Generated by dts-bundle-generator v9.3.1

export interface Index {
	offset: number;
	pos: string;
	language: string;
	lemma: string;
	isGood: boolean;
}
export interface Definition {
	offset: number;
	pos: string;
	definition: string;
	glossary: string[];
}
declare class Database {
	isReady: boolean;
	isProcessing: boolean;
	index: Index[];
	indexLemmaIndex: Map<string, Index[]>;
	indexOffsetIndex: Map<number, Index[]>;
	definitions: Definition[];
	path: string;
	constructor(path: string);
	init(): Promise<void>;
	markReady(): void;
	getSize(): {
		count: number;
		indexes: number;
	};
	addIndex(item: Index): void;
	static copyIndex(item: Index): {
		offset: number;
		pos: string;
		language: string;
		lemma: string;
		isGood: boolean;
	};
	indexLemmaSearch(query: string[]): Map<string, Index[]>;
	indexOffsetSearch(query: number[]): Map<number, Index[]>;
	addDefinition(data: Definition): void;
}
export interface Query {
	offset: number;
	pos: string;
	language: string;
	lemma: string;
	words: string;
	glossary: string[];
	englishWords: string[];
	definition: string;
}
declare class Dictionary {
	path: string;
	english: any;
	database: Database;
	constructor(path: string);
	init(): Promise<void>;
	query(search: string): Map<number, Query>;
}
declare const idDictionary: {
	init: () => Promise<Dictionary>;
};

export {
	idDictionary as default,
};

export {};