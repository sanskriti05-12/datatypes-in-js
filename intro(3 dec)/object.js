let text="this is a string";
let arr1=["sidhharth",25,"bhpal"]
// object
// key:value

let students={
    name:"san",
    age:22,
    city:"bhopal",
    name:"ani",
    welcome:function(){
       console.log(` welcome to ${this.name} home`)
    },
    fruits:["apple","mango","banana"]
}
    console.log(students.fruits[2])
  

// objects ko access krna
console.log(students.age)
students.email="sanskriti@gmail.com" //additional added
console.log(students);
students.age=25  //upate
// delete students.name //delete
students.welcome()