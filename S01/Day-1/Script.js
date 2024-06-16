alert("hello world")
console.log("Ratin Haldar");

// Variable cannot be re-declared but can be updated. A block scope variable.
let a = 10;
console.log(a)

// Variable can be re-declared & updated. A global scope variable.
var age = 18;
console.log(age)

// Variable cannot be re-declared or updated. A block scope variable. 
const value = "raju";
console.log(age)


{
    let a = 34;
    console.log(a);
}

{
         let a = 56;
         console.log(a);

  }

 const p = 3;
  p = 9;
  console.log(p);

 Datatype

//  Number datatype
  let age = 12;
  let price = 45;
  console.log(age)
  console.log(typeof(age))
  console.log(price)
  console.log(typeof(price))

//  String datatype
  let s = "ratin";
  console.log(s)
  console.log(typeof(s))

//  boolean datatype
  let r = true;
  let q = false;
  console.log(r)
  console.log(typeof(r))
  console.log(q)
  console.log(typeof(q))

//  undefined datatpye

 let U;
  console.log(U)
  console.log(typeof(U))

 let n = null;
  console.log(n)
  console.log(typeof(n))

 let m = BigInt(1234567);
  console.log(m)
  console.log(typeof(m));

 const student = {
     Fullname : "Ratin Haldar",
     age : 20,
     CGPA : 8.2,
     isPass : true,
 };

 student.age = student.age + 1;
 student.Fullname = "rahul Haldar"

 console.log(student.CGPA);
 console.log(student);

const product = {
    Product_name : "Parker Jotter Standard CT Ball Pen (Black)",
    Rating : 4,
    Deal : true,
    price : 270,
};
console.log(product);

// Qs2. Create a const object called “profile” to store information shown in the picture. 

const profile = {
    username : "@ratinhaldarofficial",
    isFollow : true,
    posts : 195,
    followers : 2000,
    following : 250,
    description : "Hii I am Ratin Haldar"
};

console.log(profile);





