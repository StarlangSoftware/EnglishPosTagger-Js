import * as assert from "assert";
import {PosTaggedCorpus} from "../dist/PosTaggedCorpus";
import {PosTaggedWord} from "../dist/PosTaggedWord";
import {HmmPosTagger} from "../dist/HmmPosTagger";

describe('HmmPosTaggerTest', function() {
    describe('HmmPosTaggerTest', function() {
        it('testPosTag', function() {
            let posTagger = new HmmPosTagger();
            let posTaggedCorpus = new PosTaggedCorpus("brown.txt");
            posTagger.train(posTaggedCorpus);
            let correct = 0, incorrect = 0;
            for (let i = 0; i < posTaggedCorpus.sentenceCount(); i++){
                let taggedSentence = posTagger.posTag(posTaggedCorpus.getSentence(i));
                for (let j = 0; j < taggedSentence.wordCount(); j++){
                    if ((<PosTaggedWord>posTaggedCorpus.getSentence(i).getWord(j)).getTag() == (<PosTaggedWord>taggedSentence.getWord(j)).getTag()){
                        correct++;
                    } else {
                        incorrect++;
                    }
                }
            }
            assert.ok(Math.abs(100 * correct / (correct + incorrect) - 97.59) < 0.01);
        });
    });
});
