import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import {CounterHashMap} from "nlptoolkit-datastructure/dist/CounterHashMap";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import * as fs from "fs";
import {PosTaggedWord} from "./PosTaggedWord";

export class PosTaggedCorpus extends Corpus{

    private tagList: CounterHashMap<string> = new CounterHashMap<string>()

    /**
     * A constructor of {@link PosTaggedCorpus} which initializes the sentences of the corpus, the word list of
     * the corpus, and all possible tags.
     */
    constructor(fileName?: string) {
        super();
        if (fileName != undefined) {
            let newSentence = new Sentence();
            let data = fs.readFileSync(fileName, 'utf8')
            let lines = data.split("\n")
            for (let line of lines) {
                let words = line.split(/\s/);
                for (let word of words){
                    if (word != ""){
                        if (word.includes("/")){
                            let name = word.substring(0, word.lastIndexOf('/'));
                            let tag = word.substring(word.lastIndexOf('/') + 1);
                            let shortTag
                            if (tag.includes("+")){
                                shortTag = tag.substring(0, tag.indexOf("+"));
                            } else {
                                if (tag.includes("-")){
                                    shortTag = tag.substring(0, tag.indexOf("-"));
                                } else {
                                    shortTag = tag;
                                }
                            }
                            this.tagList.put(shortTag);
                            newSentence.addWord(new PosTaggedWord(name, shortTag));
                            if (tag == "."){
                                this.addSentence(newSentence);
                                newSentence = new Sentence();
                            }
                        }
                    }
                }
            }
            if (newSentence.wordCount() > 0){
                this.addSentence(newSentence);
            }
        }
    }

    /**
     * getTagList returns all possible tags as a set.
     *
     * @return Set of all possible tags.
     */
    getTagList(): IterableIterator<string>{
        return this.tagList.keys()
    }
}