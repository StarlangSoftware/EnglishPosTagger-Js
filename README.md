Pos Tagging
============

This is a tool meant for tagging words with their part-of-speech, a grammatical category based on their function within a sentence, such as noun, adjective, verb, and so forth. 

Video Lectures
============

[<img src="https://github.com/StarlangSoftware/EnglishPosTagger/blob/master/video1.jpg" width="50%">](https://youtu.be/gQmc7Nhwhuk)[<img src="https://github.com/StarlangSoftware/EnglishPosTagger/blob/master/video2.jpg" width="50%">](https://youtu.be/GHUib73MRks)

For Developers
============

You can also see [Python](https://github.com/starlangsoftware/EnglishPosTagger-Py), [Cython](https://github.com/starlangsoftware/EnglishPosTagger-Cy), 
[C++](https://github.com/starlangsoftware/EnglishPosTagger-CPP), [C](https://github.com/starlangsoftware/EnglishPosTagger-C), [Swift](https://github.com/starlangsoftware/EnglishPosTagger-Swift), 
[Java](https://github.com/starlangsoftware/EnglishPosTagger), or [C#](https://github.com/starlangsoftware/EnglishPosTagger-CS) repository.

## Requirements

* [Node.js 14 or higher](#Node.js)
* [Git](#git)

### Node.js 

To check if you have a compatible version of Node.js installed, use the following command:

    node -v
    
You can find the latest version of Node.js [here](https://nodejs.org/en/download/).

### Git

Install the [latest version of Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Npm Install

	npm install nlptoolkit-postagger
	
## Download Code

In order to work on code, create a fork from GitHub page. 
Use Git for cloning the code to your local or below line for Ubuntu:

	git clone <your-fork-git-link>

A directory called util will be created. Or you can use below link for exploring the code:

	git clone https://github.com/starlangsoftware/englishpostagger-js.git

## Open project with Webstorm IDE

Steps for opening the cloned project:

* Start IDE
* Select **File | Open** from main menu
* Choose `Postagger-Js` file
* Select open as project option
* Couple of seconds, dependencies will be downloaded. 

Detailed Description
============

+ [PosTagger](#postagger)

## PosTagger

To train the PosTagger which is used for English pos tagging 

	train(corpus: PosTaggedCorpus): void;
		
To tag a sentence, using a newly trained or loaded PosTagger model

	posTag(sentence: Sentence): Sentence;
	
3 different PosTagger models are supported: The one that is used to tag the sentences with a random tag

	DummyPosTagger
	
the one that tags the word with the most used tag for a given word

	NaivePosTagger
	
the one that does an Hmm based training and tags the words accordingly

	HmmPosTagger

For Contibutors
============

### package.json file

1. main and types are important when this package will be imported.
```
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
```
2. Dependencies should be maximum (not only direct but also indirect references should also be given), everything directly in the code should be given here.
```
  "dependencies": {
    "nlptoolkit-corpus": "^1.0.12",
    "nlptoolkit-dictionary": "^1.0.14",
    "nlptoolkit-morphologicalanalysis": "^1.0.19",
    "nlptoolkit-xmlparser": "^1.0.7"
  }
```

### tsconfig.json file

1. Compiler flags currently includes nodeNext for importing.
```
  "compilerOptions": {
    "outDir": "dist",
    "module": "nodeNext",
    "sourceMap": true,
    "noImplicitAny": true,
    "removeComments": false,
    "declaration": true,
  },
```
2. tests, node_modules and dist should be excluded.
```
  "exclude": [
    "tests",
    "node_modules",
    "dist"
  ]
```

### index.ts file

1. Should include all ts classes.
```
export * from "./CategoryType"
export * from "./InterlingualDependencyType"
export * from "./InterlingualRelation"
export * from "./Literal"
```

### Data files
1. Add data files to the project folder. Subprojects should include all data files of the parent projects.

### Javascript files

1. Classes should be defined as exported.
```
export class JCN extends ICSimilarity{
```
2. Do not forget to comment each function.
```
    /**
     * Computes JCN wordnet similarity metric between two synsets.
     * @param synSet1 First synset
     * @param synSet2 Second synset
     * @return JCN wordnet similarity metric between two synsets
     */
    computeSimilarity(synSet1: SynSet, synSet2: SynSet): number {
```
3. Function names should follow caml case.
```
    setSynSetId(synSetId: string){
```
4. Write getter and setter methods.
```
    getRelation(index: number): Relation{
    setName(name: string){
```
5. Use standard javascript test style.
```
describe('SimilarityPathTest', function() {
    describe('SimilarityPathTest', function() {
        it('testComputeSimilarity', function() {
            let turkish = new WordNet();
            let similarityPath = new SimilarityPath(turkish);
            assert.strictEqual(32.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0656390"), turkish.getSynSetWithId("TUR10-0600460")));
            assert.strictEqual(13.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0412120"), turkish.getSynSetWithId("TUR10-0755370")));
            assert.strictEqual(13.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0195110"), turkish.getSynSetWithId("TUR10-0822980")));
        });
    });
});
```
6. Enumerated types should be declared with enum.
```
export enum CategoryType {
    MATHEMATICS, SPORT, MUSIC, SLANG, BOTANIC,
    PLURAL, MARINE, HISTORY, THEOLOGY, ZOOLOGY,
    METAPHOR, PSYCHOLOGY, ASTRONOMY, GEOGRAPHY, GRAMMAR,
    MILITARY, PHYSICS, PHILOSOPHY, MEDICAL, THEATER,
    ECONOMY, LAW, ANATOMY, GEOMETRY, BUSINESS,
    PEDAGOGY, TECHNOLOGY, LOGIC, LITERATURE, CINEMA,
    TELEVISION, ARCHITECTURE, TECHNICAL, SOCIOLOGY, BIOLOGY,
    CHEMISTRY, GEOLOGY, INFORMATICS, PHYSIOLOGY, METEOROLOGY,
    MINERALOGY
}
```
7. If there are multiple constructors for a class, define them as constructor1, constructor2, ..., then from the original constructor call these methods.
```
    constructor1(symbol: any){
    constructor2(symbol: any, multipleFile: MultipleFile) {
    constructor(symbol: any, multipleFile: MultipleFile = undefined) {
        if (multipleFile == undefined){
            this.constructor1(symbol);
        } else {
            this.constructor2(symbol, multipleFile);
        }
    }
```
8. Importing should be done via import method with referencing the node-modules.
```
import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
```
9. Use xmlparser package for parsing xml files.
```
	var doc = new XmlDocument("test.xml")
	doc.parse()
	let root = doc.getFirstChild()
	let firstChild = root.getFirstChild()
```
