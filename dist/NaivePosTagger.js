"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaivePosTagger = void 0;
const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
const PosTaggedWord_1 = require("./PosTaggedWord");
const CounterHashMap_1 = require("nlptoolkit-datastructure/dist/CounterHashMap");
class NaivePosTagger {
    maxMap;
    /**
     * Test method for the Naive pos tagger. For each word, the method chooses the maximum a posterior tag from all
     * possible tag list for that word.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence) {
        let result = new Sentence_1.Sentence();
        for (let i = 0; i < sentence.wordCount(); i++) {
            result.addWord(new PosTaggedWord_1.PosTaggedWord(sentence.getWord(i).getName(), this.maxMap.get(sentence.getWord(i).getName())));
        }
        return result;
    }
    /**
     * Train method for the Naive pos tagger. The algorithm gets all possible tag list. Then counts all
     * possible tags (with its counts) for each possible word.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus) {
        let map = new Map();
        for (let i = 0; i < corpus.sentenceCount(); i++) {
            let s = corpus.getSentence(i);
            for (let j = 0; j < s.wordCount(); j++) {
                let word = corpus.getSentence(i).getWord(j);
                if (map.has(word.getName())) {
                    map.get(word.getName()).put(word.getTag());
                }
                else {
                    let counterMap = new CounterHashMap_1.CounterHashMap();
                    counterMap.put(word.getTag());
                    map.set(word.getName(), counterMap);
                }
            }
        }
        this.maxMap = new Map();
        for (let word of map.keys()) {
            this.maxMap.set(word, map.get(word).max());
        }
    }
}
exports.NaivePosTagger = NaivePosTagger;
//# sourceMappingURL=NaivePosTagger.js.map