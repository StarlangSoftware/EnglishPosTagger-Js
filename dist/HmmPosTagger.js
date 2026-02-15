"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HmmPosTagger = void 0;
const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
const PosTaggedWord_1 = require("./PosTaggedWord");
const Hmm1_1 = require("nlptoolkit-hmm/dist/Hmm1");
class HmmPosTagger {
    hmm;
    /**
     * Test method for the Hmm pos tagger. For each sentence, the method uses the viterbi algorithm to produce the
     * most possible state sequence for the given sentence.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence) {
        let result = new Sentence_1.Sentence();
        let tagList = this.hmm.viterbi(sentence.getWords());
        for (let i = 0; i < sentence.wordCount(); i++) {
            result.addWord(new PosTaggedWord_1.PosTaggedWord(sentence.getWord(i).getName(), tagList[i]));
        }
        return result;
    }
    /**
     * Train method for the Hmm pos tagger. The algorithm trains an Hmm from the corpus, where corpus constitutes
     * as an observation array.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus) {
        let emittedSymbols = new Array();
        for (let i = 0; i < emittedSymbols.length; i++) {
            emittedSymbols.push(new Array());
            for (let j = 0; j < corpus.getSentence(i).wordCount(); j++) {
                let word = corpus.getSentence(i).getWord(j);
                emittedSymbols[i].push(word.getTag());
            }
        }
        let tagList = new Set();
        for (let tag of corpus.getTagList()) {
            tagList.add(tag);
        }
        this.hmm = new Hmm1_1.Hmm1(tagList, emittedSymbols, corpus.getAllWordsAsArrayList());
    }
}
exports.HmmPosTagger = HmmPosTagger;
//# sourceMappingURL=HmmPosTagger.js.map