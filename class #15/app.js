// for(var i =1 ; i<=10 ; i++){
//     document.write(i)
// }

//  var i = 0;                             // initialization
//  while (i <= 3) {                // arguements
//  console.log(i);
//  i++;                                  // incrementent & decrement.
//  }


// var c = 1 ;
// do{
//     console.log(c)
//     c++;
// }
// while(c <= 10);

// function foo(greet){
//     alert(greet)
// }

// function getName(){
//     var name = document.getElementById("name")
//     alert(name.value)
 
//      name.value = ""

// }

// function setName(){
 
//     var name = document.getElementById("xyz")
//    name.value = "Ghous"

//    var para = document.getElementById("para")

//     // alert(name.value)
     
// //  name.value = ""

// para.innerHTML= "Hello this is example"

// }
// setName()


function getNumber(num){
    
      var result = document.getElementById("result");

     result.value  += num;

}
function clearResult(){

    var result = document.getElementById("result");
   result.value = ""

}

function getResult(){

    var result = document.getElementById("result");
    console.log(result.value) 
    result.value = eval(result.value)

}


