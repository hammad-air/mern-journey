// var nam = "Hammad";
// // function foo(){
// //      name = "ghous";
// // }
// // foo();

// // console.log(name)

// if (true){
//      var name = "Hammad";
// }
// console.log(name)

// 1.Let ak block line function hay is may srf vo chzyn count ke jati hayn jo k bracket k ander ho.
// 2. let function ak hi br write kia jata hay.. agr multiple time isko repeat kea jay to run nahi hota hay.

                                                // IF FUNCTION 
// if (true) {
//  var nam = "anus";
// }
// console.log(nam);


                                  // CHECKING TWO VARIABLES IN SINGLE CONSOLE
// let lastName;
// lastName = "Ghous";
// console.log(lastName)


                                    //  const FUNCTION
//  1.const 1 asa fuunction hay js may js may agr koi value assign kr dea jay to vo permenent save ho  jay ga                                   
// const school = "Sylani";
// const school = "Sylani";

// var obj = {
//     schoolName: school
// }
// console.log(obj)
                                                        // template  litereals
// let firstName = "Hammad";
// let lastName  =  "Nadeem"; 
                                         // FIREBASE OLD TECHNIQUES
// firebase.database().ref("karachi/" + "webandmobile/" + firstName )   
                                                // FIREBASE NEW TECHNIQUES

// firebase.database().ref(`karachi/sylani/webandmobile/${firstName}${lastName}`)                                                
// console.log(`My name is ${firstName} ${lastName}`)
                                                        //   SPREAD OPERATOR
// 1. spread operator use in array and object 
// 2. If we murge 2 array, we use spread operator

// var student1 = {name: "Ghous"}
// var student2 = {... student1, school : "Hammad"}
// console.log(student2)
// console.log(student1 + " " + student2)
                            // OBJECT  DESTRUCTURING

        // OBJECT WITH OLD METHOD 

// var student ={
//     name: "HAMMAD",
//     school : "SHOEBY GRAMMMAR SECONDARY SCHOOL" ,
//     roll : 123
// }
// // console.log(student.name)

//                                 // DESTRUCTURING MAIN
// 1. In destructring, "console.log" ke zrorat nahi prti hay, ak variable "let" kr k alg alag console krn dyn gagy
// let {name,school,roll} = student;                                
// console.log(name)
// console.log(school)
                                    //    TURNARY OPERATOR
                                                    //    simple javascript if /else statement

// var age =20;
// if (age > 30 || age < 50){
//     console.log("30 say bara hay")
// }else{
 //     console.log("30 sy chota hay")
 // }
    
// BY   TURNARY OPERATOR
//     if (age > 30 && age < 50)
// var check = age > 30 && age < 50? "30 say bara hay"  :   "30 say chota hay";
// console.log(check)

// var bool = false;
// var name = bool && "Ghous";
// console.log(name)

                    //   SYNCRONAS           AND         ASYNCRONAS         IN      ES-6
                       
                                              //  1.          ASYNCRONAS  
//  var name1;
// setTimeout(function( ){
// name1 = "HAMMAD SHEKH"                    
// },1000);      
// console.log(name1)                    
// console.log("Number 3")                 

                                              //  2.                     SYNCRONAS 

                      //Promise in javascriot ES-6

// var promise = new Promise (function(resolve,reject){
//             var zinger = "Available";
//             if(zinger === "Available"){
//                     resolve("Han zinger hy bhai")
//      }else{
//                     reject("Nhi hy bhai zinger")
//             }
// })                     
// promise.then(function(data){
//        console.log(data)
// })
// .catch(function(error){
//         console.log(error)
// })

                                    //    PENDING IN PROMISE FUNCTION


var promise = new Promise(function(resolve,reject){
        if(true){setTimeout(() => {
                resolve("It is resolve")
        }, 3000);
        }else{
                reject("Reject")
        }
})
console.log(promise)
promise.then(function(data){
       console.log(data)
})
.catch(function(error){
        console.log(error)
})

                   //     PROMISE FUNCTION IN POSITIVE WAY
// var promise = new Promise (function(resolve,reject){

//         firebase.database().ref("users").on("child_added",function (data){
//                 if (data.val()){
//                         resolve(data.val())
//                 }else{
//                         reject("some thing went wrong")
//                 }
//         })
// })
// promise.then(function(data){
//         console.log(data)
// })
// .catch(function(err){
//         console.log(err)
// })































































