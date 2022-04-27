Pos Tagging
============

This is a tool meant for tagging words with their part-of-speech, a grammatical category based on their function within a sentence, such as noun, adjective, verb, and so forth. 

Video Lectures
============

[<img src="https://github.com/StarlangSoftware/EnglishPosTagger/blob/master/video1.jpg" width="50%">](https://youtu.be/gQmc7Nhwhuk)[<img src="https://github.com/StarlangSoftware/EnglishPosTagger/blob/master/video2.jpg" width="50%">](https://youtu.be/GHUib73MRks)

For Developers
============

You can also see [Python](https://github.com/starlangsoftware/EnglishPosTagger-Py), [Cython](https://github.com/starlangsoftware/EnglishPosTagger-Cy), 
[C++](https://github.com/starlangsoftware/EnglishPosTagger-CPP), [Swift](https://github.com/starlangsoftware/EnglishPosTagger-Swift), 
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
