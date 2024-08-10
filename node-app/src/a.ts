let x: number = 10;
console.log(x);

function greet(firstName: String) {
  console.log(`Hello, ${firstName}`);
}

greet("ashish")


function sum(a: number, b: number): number {
  return a + b;
}

const value = sum(1, 2);
console.log(value);

function isLegal(age: number): boolean {
  return age >= 18;
}

//  infer type typescript knows the type
let isLegalAge = isLegal(18);
console.log(isLegalAge);

function runAfter1S(fn: () => void): void {
  setTimeout(fn, 1000);
}

// runAfter1S(() => console.log("hi there"));


//  create a function which true if age is legal
interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function legalUser(user: User): boolean {
  return user.age >= 18;
}

let legalOne: boolean = legalUser({
  firstName: "Ashish",
  lastName: "Pal",
  age: 21,
});

console.log("is user legal", legalOne);



interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}


type stringOrNumber = string | number;

function hello(id: stringOrNumber): void {
  console.log(`hello - ${id}`);
}

hello(123);


// how to denote arrays in typescript
let arr: number[] = [];
arr.push(12);
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}


function identify<T>(arg: T[]): T {
  return arg[0];
}

const val = identify<string>(["song", "mumbai", "ram ji"]);
console.log(val.toUpperCase());

