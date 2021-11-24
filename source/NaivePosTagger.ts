import {PosTagger} from "./PosTagger";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {PosTaggedCorpus} from "./PosTaggedCorpus";
import {PosTaggedWord} from "./PosTaggedWord";
import {CounterHashMap} from "nlptoolkit-datastructure/dist/CounterHashMap";

export class NaivePosTagger implements PosTagger{

    private maxMap: Map<string, string>

    /**
     * Test method for the Naive pos tagger. For each word, the method chooses the maximum a posterior tag from all
     * possible tag list for that word.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence: Sentence): Sentence {
        let result = new Sentence();
        for (let i = 0; i < sentence.wordCount(); i++){
            result.addWord(new PosTaggedWord(sentence.getWord(i).getName(), this.maxMap.get(sentence.getWord(i).getName())));
        }
        return result;
    }

    /**
     * Train method for the Naive pos tagger. The algorithm gets all possible tag list. Then counts all
     * possible tags (with its counts) for each possible word.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus: PosTaggedCorpus): void {
        let map = new Map<string, CounterHashMap<string>>();
        for (let i = 0; i < corpus.sentenceCount(); i++){
            let s = corpus.getSentence(i);
            for (let j = 0; j < s.wordCount(); j++){
                let word = <PosTaggedWord> corpus.getSentence(i).getWord(j);
                if (map.has(word.getName())){
                    map.get(word.getName()).put(word.getTag());
                } else {
                    let counterMap = new CounterHashMap<string>();
                    counterMap.put(word.getTag());
                    map.set(word.getName(), counterMap);
                }
            }
        }
        this.maxMap = new Map<string, string>();
        for (let word of map.keys()){
            this.maxMap.set(word, map.get(word).max());
        }
    }

}