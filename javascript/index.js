const name = {
  firstName: "Ashish",
  lastName: "pal",
}

function fullName (state, district) {
  console.log(`${this.firstName} ${this.lastName} from ${state}, ${district}`);
}

fullName.call(name, "Maharashtra", "Mumbai");

//   call method is used to function borrowing
const name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
}

//  difference between cll and apply
//  in apply() => we passed 2nd argument ans list[]
//  in call() => we passed parameters as variables
fullName.call(name2, "Uttar Pradesh", "Jaunpur");

fullName.apply(name2, ["Karnataka", "kerala"]);


//  bind method will give you the copy of function which will be invoked later
let main = fullName.bind(name2, "Maharashtra", "Mumbai");
main();