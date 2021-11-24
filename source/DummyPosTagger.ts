import {PosTagger} from "./PosTagger";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {PosTaggedCorpus} from "./PosTaggedCorpus";
import {PosTaggedWord} from "./PosTaggedWord";

export class DummyPosTagger implements PosTagger{

    private tagList: Array<string> = new Array<string>()

    /**
     * Test method for the Dummy pos tagger. For each word, the method chooses randomly a tag from all possible
     * tag list.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence: Sentence): Sentence {
        let result = new Sentence();
        for (let i = 0; i < sentence.wordCount(); i++){
            result.addWord(new PosTaggedWord(sentence.getWord(i).getName(),
                this.tagList[Math.floor(Math.random() * this.tagList.length)]));
        }
        return result;
    }

    /**
     * Train method for the Dummy pos tagger. The algorithm gets all possible tag list.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus: PosTaggedCorpus): void {
        let corpusTagList = corpus.getTagList();
        for (let tag of corpusTagList){
            this.tagList.push(tag)
        }
    }

}