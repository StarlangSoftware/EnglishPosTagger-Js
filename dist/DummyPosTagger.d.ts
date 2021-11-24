import { PosTagger } from "./PosTagger";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { PosTaggedCorpus } from "./PosTaggedCorpus";
export declare class DummyPosTagger implements PosTagger {
    private tagList;
    /**
     * Test method for the Dummy pos tagger. For each word, the method chooses randomly a tag from all possible
     * tag list.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence: Sentence): Sentence;
    /**
     * Train method for the Dummy pos tagger. The algorithm gets all possible tag list.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus: PosTaggedCorpus): void;
}
