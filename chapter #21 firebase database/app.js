function Submit(){
    var name = document.getElementById("Name")
    var age  = document.getElementById("Age")

    var key = firebase.database().ref('student').push().key                    // firebase database key
    var student = {
        name : name.value,
        age : age.value,
        key : key
    }

    // var key = Math.random() * 23423893723;                                // js key
// var key = firebase.database().ref('student/' + key).push().key
    firebase.database().ref('student'   +   key).set(student)   
}

// function  getFunctionData(){
//         firebase.database().ref('student').once('value',function(data){
//         console.log(data.val())
//         })
// }

// getFunctionData()


