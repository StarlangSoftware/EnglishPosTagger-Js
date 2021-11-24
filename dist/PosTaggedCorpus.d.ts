import { Corpus } from "nlptoolkit-corpus/dist/Corpus";
export declare class PosTaggedCorpus extends Corpus {
    private tagList;
    /**
     * A constructor of {@link PosTaggedCorpus} which initializes the sentences of the corpus, the word list of
     * the corpus, and all possible tags.
     */
    constructor(fileName?: string);
    /**
     * getTagList returns all possible tags as a set.
     *
     * @return Set of all possible tags.
     */
    getTagList(): IterableIterator<string>;
}
