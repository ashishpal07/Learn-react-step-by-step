
Array.prototype.myMap = function (callBack) {
  const op = []
  this.forEach((ele, index) => {
    op.push(callBack(this[index]))
  })

  return op;
}

console.log([1,2,3,4,5].map(e => e*2));


const user = {firstName: "ahsihs", lastName: "pal"}
// const newUser = function (...user, (user) => user.lastName = "Yadav");


const details = {firstName: "Ashish", lastName: "Pal", state: "Maharashtra", district: "Thane"}

console.log({...details, district: "Mumbai"})