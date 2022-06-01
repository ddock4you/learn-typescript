const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1:number, num2:number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});



const num1 = 1;
const num2 = 2;
const stringResult = '정답은.. ';
const isShow = false;

const add2 = (num1: number, num2:number, result:string, isShow: boolean) => {
    const calculate = num1 + num2;
    if (isShow) return alert(result + calculate);
    else console.log(calculate);
}

add2(num1, num2, stringResult, isShow);

enum role { num1 = 'hi', num2 = 'by', num3 = 'aa'};

const obj1: {
    name: string;
    age: number;
    role: string[];
    deepArray: [number, string],
    deepObj: {
        name: string
    },
    grade: string
} = {
    name: 'ysh',
    age: 33,
    role: ['a', 'b'],
    deepArray: [2, 'hi'],
    deepObj: {
        name: 'y'
    },
    grade: role.num1
}

console.log(obj1);

const arr1: string[] = ['A', 'B'];

type combine = string | number;

const numberOrString:combine = 'A';

const customFunction:Function = add2 ;

const add3 = (num1: number, num2: number, cb:(sum:number) => string) => {
    cb(num1 + num2);
}

add3(num1, num2, (sumresult) => `합계: ${sumresult}`);

let hi:unknown;
let bye:any;
// unknown 타입은 다른 타입이 지정된 변수에 할당할 수 없음.
// const aaa:string = hi;
const bbb:number = bye;