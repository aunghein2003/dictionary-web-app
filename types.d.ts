export type FontsType = "serif" | "sans" | "mono";
export type ThemeType = "dark" | "light";

export type ResponseError = {
  title: string;
  message: string;
  resolution: string;
};

export type ResponseData = {
  word: string;
  phonetic?: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
};

export type Phonetics = {
  text?: string;
  audio: string;
};

export type Meanings = {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: string[];
};

export type Definitions = {
  definition: string;
};
