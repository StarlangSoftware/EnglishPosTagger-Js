import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { PosTaggedCorpus } from "./PosTaggedCorpus";
export interface PosTagger {
    train(corpus: PosTaggedCorpus): void;
    posTag(sentence: Sentence): Sentence;
}
