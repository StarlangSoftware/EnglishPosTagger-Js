import * as assert from "assert";
import {DummyPosTagger} from "../dist/DummyPosTagger";
import {PosTaggedCorpus} from "../dist/PosTaggedCorpus";
import {PosTaggedWord} from "../dist/PosTaggedWord";

describe('DummyPosTaggerTest', function() {
    describe('DummyPosTaggerTest', function() {
        it('testPosTag', function() {
            let posTagger = new DummyPosTagger();
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
            assert.ok(Math.abs(100 * correct / (correct + incorrect) - 0.88) < 0.01);
        });
    });
});
