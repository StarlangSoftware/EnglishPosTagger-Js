"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosTaggedCorpus = void 0;
const Corpus_1 = require("nlptoolkit-corpus/dist/Corpus");
const CounterHashMap_1 = require("nlptoolkit-datastructure/dist/CounterHashMap");
const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
const fs = __importStar(require("fs"));
const PosTaggedWord_1 = require("./PosTaggedWord");
class PosTaggedCorpus extends Corpus_1.Corpus {
    tagList = new CounterHashMap_1.CounterHashMap();
    /**
     * A constructor of {@link PosTaggedCorpus} which initializes the sentences of the corpus, the word list of
     * the corpus, and all possible tags.
     */
    constructor(fileName) {
        super();
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
//# sourceMappingURL=PosTaggedCorpus.js.map