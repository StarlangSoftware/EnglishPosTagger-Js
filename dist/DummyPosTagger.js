"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyPosTagger = void 0;
const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
const PosTaggedWord_1 = require("./PosTaggedWord");
class DummyPosTagger {
    tagList = new Array();
    /**
     * Test method for the Dummy pos tagger. For each word, the method chooses randomly a tag from all possible
     * tag list.
     *
     * @param sentence Sentence to be tagged.
     * @return Annotated (tagged) sentence.
     */
    posTag(sentence) {
        let result = new Sentence_1.Sentence();
        for (let i = 0; i < sentence.wordCount(); i++) {
            result.addWord(new PosTaggedWord_1.PosTaggedWord(sentence.getWord(i).getName(), this.tagList[Math.floor(Math.random() * this.tagList.length)]));
        }
        return result;
    }
    /**
     * Train method for the Dummy pos tagger. The algorithm gets all possible tag list.
     *
     * @param corpus Training data for the tagger.
     */
    train(corpus) {
        let corpusTagList = corpus.getTagList();
        for (let tag of corpusTagList) {
            this.tagList.push(tag);
        }
    }
}
exports.DummyPosTagger = DummyPosTagger;
//# sourceMappingURL=DummyPosTagger.js.map