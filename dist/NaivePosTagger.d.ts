import { PosTagger } from "./PosTagger";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { PosTaggedCorpus } from "./PosTaggedCorpus";
export declare class NaivePosTagger implements PosTagger {
    private maxMap;
    /**
     * Test method for the Naive pos tagger. For each word, the method chooses the maximum a posterior tag from all
     * possible tag list for that word.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence: Sentence): Sentence;
    /**
     * Train method for the Naive pos tagger. The algorithm gets all possible tag list. Then counts all
     * possible tags (with its counts) for each possible word.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus: PosTaggedCorpus): void;
}
