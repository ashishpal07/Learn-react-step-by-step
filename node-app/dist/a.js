"use strict";
let x = 10;
console.log(x);
function greet(firstName) {
    console.log(`Hello, ${firstName}`);
}
greet("ashish");
function sum(a, b) {
    return a + b;
}
const value = sum(1, 2);
console.log(value);
function isLegal(age) {
    return age >= 18;
}
let isLegalAge = isLegal(18);
console.log(isLegalAge);
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
function legalUser(user) {
    return user.age >= 18;
}
let legalOne = legalUser({
    firstName: "Ashish",
    lastName: "Pal",
    age: 21,
});
console.log("is user legal", legalOne);
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
function hello(id) {
    console.log(`hello - ${id}`);
}
hello(123);
let arr = [];
arr.push(12);
for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}
function identify(arg) {
    return arg[0];
}
const val = identify(["song", "mumbai", "ram ji"]);
console.log(val.toUpperCase());
