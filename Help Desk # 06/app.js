// var arr = ["ghous","basit"]


// console.log(arr[1])

// var studentName = "ghous"
// var studentRollNumber = 123;



// var student = {
//     name : "Ghous",
//     roll : "12",
//     exam1result : 50,
//     exam2result : 576,
//     class :"Web and mobile",
//     getResult : function(){
//         return  this.exam1result + this.exam2result;
//     }
// }

// // student.phone = 12345;
// console.log(student.getResult())

 
                                                     //IT IS CALLED AS ARRY ON AN OBJECT

// var student = [{name : "Ghous"} , {name : "basit"}]                                                   

// for(var i = 0; i< student.length;i++){

//     console.log(student[i].name)
// }

// delete student.class

// var check = "name"  in student

// console.log(check)




function Student (name, className , RollNo , Phone){
    this.name = name;
    this.className = className;
    this.RollNo = RollNo;
    this.Phone = Phone;
}


var  student1 = new Student("Ghous","web and mobile", 123 , 12445)

var  student2 = new Student("Hammad","web and mobile", 12343 , 155545)

console.log(student2)