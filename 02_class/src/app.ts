interface Named {
    name: string;
}

interface greeting extends Named {
    greet(pharse: string): void;
}

class Person implements greeting {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(pharse: string) {
        console.log(`${pharse} ${this.name}`);
    }
}

const max = new Person("Max");
max.greet("hi");

interface addFn {
    (a: number, b: number): number;
}

type addFn2 = (a: number, b: number) => number;

const add: addFn2 = (n1, n2) => {
    return n1 + n2;
};
