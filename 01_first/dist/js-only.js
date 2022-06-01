"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
const num1 = 1;
const num2 = 2;
const stringResult = '정답은.. ';
const isShow = false;
const add2 = (num1, num2, result, isShow) => {
    const calculate = num1 + num2;
    if (isShow)
        return alert(result + calculate);
    else
        console.log(calculate);
};
add2(num1, num2, stringResult, isShow);
var role;
(function (role) {
    role["num1"] = "hi";
    role["num2"] = "by";
    role["num3"] = "aa";
})(role || (role = {}));
;
const obj1 = {
    name: 'ysh',
    age: 33,
    role: ['a', 'b'],
    deepArray: [2, 'hi'],
    deepObj: {
        name: 'y'
    },
    grade: role.num1
};
console.log(obj1);
const arr1 = ['A', 'B'];
const numberOrString = 'A';
const customFunction = add2;
const add3 = (num1, num2, cb) => {
    cb(num1 + num2);
};
add3(num1, num2, (sumresult) => `합계: ${sumresult}`);
let hi;
let bye;
// unknown 타입은 다른 타입이 지정된 변수에 할당할 수 없음.
// const aaa:string = hi;
const bbb = bye;
//# sourceMappingURL=js-only.js.map