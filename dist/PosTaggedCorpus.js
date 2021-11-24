(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-corpus/dist/Corpus", "nlptoolkit-datastructure/dist/CounterHashMap", "nlptoolkit-corpus/dist/Sentence", "fs", "./PosTaggedWord"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PosTaggedCorpus = void 0;
    const Corpus_1 = require("nlptoolkit-corpus/dist/Corpus");
    const CounterHashMap_1 = require("nlptoolkit-datastructure/dist/CounterHashMap");
    const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
    const fs = require("fs");
    const PosTaggedWord_1 = require("./PosTaggedWord");
    class PosTaggedCorpus extends Corpus_1.Corpus {
        /**
         * A constructor of {@link PosTaggedCorpus} which initializes the sentences of the corpus, the word list of
         * the corpus, and all possible tags.
         */
        constructor(fileName) {
            super();
            this.tagList = new CounterHashMap_1.CounterHashMap();
            if (fileName != undefined) {
                let newSentence = new Sentence_1.Sentence();
                let data = fs.readFileSync(fileName, 'utf8');
                let lines = data.split("\n");
                for (let line of lines) {
                    let words = line.split(/\s/);
                    for (let word of words) {
                        if (word != "") {
                            if (word.includes("/")) {
                                let name = word.substring(0, word.lastIndexOf('/'));
                                let tag = word.substring(word.lastIndexOf('/') + 1);
                                let shortTag;
                                if (tag.includes("+")) {
                                    shortTag = tag.substring(0, tag.indexOf("+"));
                                }
                                else {
                                    if (tag.includes("-")) {
                                        shortTag = tag.substring(0, tag.indexOf("-"));
                                    }
                                    else {
                                        shortTag = tag;
                                    }
                                }
                                this.tagList.put(shortTag);
                                newSentence.addWord(new PosTaggedWord_1.PosTaggedWord(name, shortTag));
                                if (tag == ".") {
                                    this.addSentence(newSentence);
                                    newSentence = new Sentence_1.Sentence();
                                }
                            }
                        }
                    }
                }
                if (newSentence.wordCount() > 0) {
                    this.addSentence(newSentence);
                }
            }
        }
        /**
         * getTagList returns all possible tags as a set.
         *
         * @return Set of all possible tags.
         */
        getTagList() {
            return this.tagList.keys();
        }
    }
    exports.PosTaggedCorpus = PosTaggedCorpus;
});
//# sourceMappingURL=PosTaggedCorpus.js.map