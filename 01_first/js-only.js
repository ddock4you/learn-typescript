var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var num1 = 1;
var num2 = 2;
var stringResult = '정답은.. ';
var isShow = false;
var add2 = function (num1, num2, result, isShow) {
    var calculate = num1 + num2;
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
var obj1 = {
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
var arr1 = ['A', 'B'];
var numberOrString = 'A';
var customFunction = add2;
var add3 = function (num1, num2, cb) {
    console.log(cb(num1 + num2));
};
add3(num1, num2, function (sumresult) { return "\uD569\uACC4: ".concat(sumresult); });
