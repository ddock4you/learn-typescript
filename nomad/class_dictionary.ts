type Words = {
    [key: string]: string;
};

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }
    add(word: Word) {
        this.words[word.term] = word.def;
    }
    get(word: Word) {
        if (!this.words[word.term]) {
            console.log("not found");
            return;
        }
        console.log(this.words[word.term]);
    }
}

class Word {
    constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const mandu = new Word("mandu", "중국 음식");
const aaa = new Word("aaa", "bbb");

const dict = new Dict();

dict.add(kimchi);
dict.add(mandu);

dict.get(kimchi);
dict.get(mandu);
dict.get(aaa);
