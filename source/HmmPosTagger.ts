import {PosTagger} from "./PosTagger";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {PosTaggedCorpus} from "./PosTaggedCorpus";
import {Hmm} from "nlptoolkit-hmm/dist/Hmm";
import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";
import {PosTaggedWord} from "./PosTaggedWord";
import {Hmm1} from "nlptoolkit-hmm/dist/Hmm1";

export class HmmPosTagger implements PosTagger{

    private hmm: Hmm<string, Word>

    /**
     * Test method for the Hmm pos tagger. For each sentence, the method uses the viterbi algorithm to produce the
     * most possible state sequence for the given sentence.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence: Sentence): Sentence {
        let result = new Sentence();
        let tagList = this.hmm.viterbi(sentence.getWords());
        for (let i = 0; i < sentence.wordCount(); i++){
            result.addWord(new PosTaggedWord(sentence.getWord(i).getName(), tagList[i]));
        }
        return result;
    }

    /**
     * Train method for the Hmm pos tagger. The algorithm trains an Hmm from the corpus, where corpus constitutes
     * as an observation array.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus: PosTaggedCorpus): void {
        let emittedSymbols = new Array<Array<string>>()
        for (let i = 0; i < emittedSymbols.length; i++){
            emittedSymbols.push(new Array<string>());
            for (let j = 0; j < corpus.getSentence(i).wordCount(); j++){
                let word = <PosTaggedWord>corpus.getSentence(i).getWord(j);
                emittedSymbols[i].push(word.getTag());
            }
        }
        let tagList = new Set<string>()
        for (let tag of corpus.getTagList()){
            tagList.add(tag)
        }
        this.hmm = new Hmm1<string, Word>(tagList, emittedSymbols, corpus.getAllWordsAsArrayList());
    }

}