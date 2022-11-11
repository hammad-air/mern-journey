// fetch('https://jsonplaceholder.typicode.com/todos/1')              // "fetch" is a function in javscript where we provided API to send request to server
// .then(response => response.json())
// .then(function(result){
//     console.log("result ==>" , result)
// })
// .catch(function(error){
//  console.log("error ==>", error)
// })

// function getData() {
//     let promise = new Promise(function(resolve, reject){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')              // "fetch" is a function in javscript where we provided API to send request to server
//         .then(response => response.json())
//         .then(function (result) {
//                         resolve(result)
//         })
//         .catch(function (error) {
//                      reject(error)
//         })
//     })    
//     promise.then(function(result){
//         console.log("Result")
//     })
// }
// function example(data) {
//     console.log("Data", data)
// }

// function getData() {

//     fetch('https://jsonplaceholder.typicode.com/todos/1')              // "fetch" is a function in javscript where we provided API to send request to server
//         .then(response => response.json())                         // THEN is a function where resolve data will come
//         .then(function (result) {
//                         example(result)                        
//         })
//         .catch(function(error){                                           // catch is a function where reject data come
//             console.log("error ==>" , error)
//         })

// function example(){

// }

//  async function getData() {
//     let promise = new Promise(function (resolve, reject) {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')              // "fetch" is a function in javscript where we provided API to send request to server
//             .then(response => response.json())                         // THEN is a function where resolve data will come
//             .then(function (data) {
//                 resolve(data);
//             })
//             .catch(function (error) {
//                 reject(error);
//             })
//     })
//     // promise
//     //     .then(function (data) {
//     //         console.log("Data==>", data);                                      // WHEN WE NEED PROMISE FUNCTION IN DATA
//         // })                                        
//     //     .catch(function (error) {
//     //         console.log(error);
//     //     })
    
//    let data = await promise;
//    console.log(data)
// }

// function add_to_cart(){
//     var image = document.getElementById("image")
//     var price = document.getElementById("price")
// }

// var product = {
//     image, 
//     price
// }
// var arr = [];
// arr.push(product)
// localStorage.setItem("cart",arr)























