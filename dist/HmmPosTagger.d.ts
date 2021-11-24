import { PosTagger } from "./PosTagger";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { PosTaggedCorpus } from "./PosTaggedCorpus";
export declare class HmmPosTagger implements PosTagger {
    private hmm;
    /**
     * Test method for the Hmm pos tagger. For each sentence, the method uses the viterbi algorithm to produce the
     * most possible state sequence for the given sentence.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence: Sentence): Sentence;
    /**
     * Train method for the Hmm pos tagger. The algorithm trains an Hmm from the corpus, where corpus constitutes
     * as an observation array.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus: PosTaggedCorpus): void;
}
