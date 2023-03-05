// const names: Array<string> = ["aa a"];
// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("done");
//     }, 1000);
//     // reject();
// });

// function merge<T extends object, U extends object>(obj1: T, obj2: U) {
//     return Object.assign(obj1, obj2);
// }

// const merge2 = <T extends object, U extends object>(obj1: T, obj2: U) =>
//     Object.assign(obj1, obj2);

// const mergeobj = merge2({ name: "ysh" }, { age: 33 });
// console.log(mergeobj.age);
// console.log(mergeobj);

// interface confirmLength {
//     length: number;
// }

// const countAndPrint = <T extends confirmLength>(element: T): [T, string] => {
//     let printText = "hi";
//     if (element.length > 0) {
//         printText = "hhhhhhhhhhhhhh";
//     }
//     console.dir(element);
//     return [element, printText];
// };

// console.log(countAndPrint("aaaaa"));

// const extractAndConvert = <T extends object, U extends keyof T>(
//     obj: T,
//     key: U
// ): string => "value" + obj[key];

// console.log(extractAndConvert({ name: "aaa" }, "name"));

// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = [];

//     addItem(item: T) {
//         this.data.push(item);
//     }

//     removeItem(item: T) {
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     getItems() {
//         return [...this.data];
//     }
// }

// const hello = new DataStorage<string>();
// hello.addItem("YSH");
// hello.addItem("YSH");
// hello.removeItem("YSH");
// console.log(hello.getItems());

// const hello2 = new DataStorage<number>();
// hello2.addItem(123);
// hello2.addItem(123);
// hello2.addItem(456);
// hello2.removeItem(123);
// console.log(hello2.getItems());

// ! -------------------------------------------------------------------------------------------------------------------
// 한 번 더 복습

interface Length {
    length: number;
}

const merge = <T extends object, U>(object1: T, object2: U) => {
    return Object.assign(object1, object2);
};

console.log(merge({ name: "ysh", hobby: "game" }, { num: 30 }));

const merge2 = <T extends Length>(element: T) => {
    console.log(element.length);
};
merge2("aaa");

const confirmKey = <T, U extends keyof T>(obj: T, key: U) => {
    console.log(obj[key]);
};

console.log(confirmKey({ name: "ysh" }, "name"));
