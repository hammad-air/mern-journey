// let obj = {
//     name: "Hammad Nadeem",
//     email: "hammadn@gmail.com"
// }
// let name = obj.email;
// console.log(name)
// OBJECT DESTRUCTRING
// let obj = {
//     name: "Hammad Nadeem",
//     email: "hammadn@gmail.com"
// }
// let { name, email } = obj;
// console.log(email);

//  ARRAY DESTRUCTURING

// let arr = ["Ghous", "basit","umair"];
// let[name1,name2,name3] = arr;
// console.log(name1)

// FUNCTION EXPERATION

// let foo = function(){
//     console.log("hell")
// }                      
// foo()


//   ARROW FUNCTION
//   function helllo(name1,name2){
//       console.log(`hello ${name1} and ${name2}`)
//   }              
//    helllo("Ghous","Hammad")

// let hello = name =>{
//     console.log(`hello${name}`)
// // }
// let hello = () =>{
//     return "Hammad"
// }
// console.log(hello())

// function foo(name){
//     console.log(this);
// }
// foo()
// setInterval(() => {
//     console.log("Hammad")
// }, 1000);
// FIREBASE DATABASE  CALL -BACK FUNCTION

// let getData = (render_data) => {
// setTimeout(() => {
//     render_data("hammad")
// }, 3000)                                                                                                                           // firebase.database.ref('/').on("child_added", (data) => {
// }                                                                                                                                           //     render_data(data.val()) 
// let render_data = (name) => {
//     console.log(name)
// }
//  getData(render_data)


                       // HIGHER ORDER FUNCTION OF ARRAYS
                       
// let arr = [{name: "Hammad", age:15 } , {name : "Anus", age: 30}]
// let filter = arr.filter(function(a){
//     return a.age === 15
// })
// console.log(filter)


                                     //    BY USING ARROW FUNCTION
9
// let arr = [{name: "Hammad", age:15 } , {name : "Anus", age: 30}]
// let filter = arr.filter(a => a.age === 30 )
// console.log(filter)

                                              //     SEARCH    FUNCTION 

// let name = "Hammad";
// let search = "Anus"

// if(name.startsWith(search)){
//     console.log(name)
// }
// console.log(name.startsWith(search))

                             //          ARRAY     MAP FUNCTION
// let arr = [{name: "Hammad"},{name: "musab"}];
// console.log(arr)
// let multiply = arr.map(a  =>  a.name = "Umair")
// console.log(multiply)


                                 //                       FETCH           DATA

// fetch('https://jsonplaceholder.typicode.com/todos/1')

// // .then(response => response.json())
// // .then(data => console.log(data))
// // .catch(err => console.log(err))

// async function getData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data)
// }

                                                     //                          ES6 CLASSES
// function Student(name, email){
//     this.name = name;
//     this.email = email
// }
// let Student1 = new Student("hammad" , "hammad@gmail.com")

// console.log(Student1)

class Student {
    constructor(name, email){
                     this.name  = name;
                     this.email = email
    }
}

class school extends Student{
    constructor(name,email,school){
        super(name)
    }
}

let Student1 = new Student('Hammad' , 'Hammadn788@gmail.comm')
console.log(Student1);



























