// var list = document.getElementsByTagName("li")

// console.log(list.length)

// var target = document.getElementById("p1");

// target.setAttribute('class' , 'blue')

// console.log(target.attributes[1].nodeValue)
// var p = document.createElement('h1')
// var text = document.createTextNode("HAMMAD SHEIKH")
// p.appendChild(text)


// var mian = document.getElementById("mian");
// mian.appendChild(p)
// console.log(p)



function addMessage() {

    var value = document.getElementById("value")
    var p = document.createElement("p")
    var textNode = document.createTextNode(value.value)
    var msg =   document.getElementById("msg")
    p.appendChild(textNode)
    msg.appendChild(p)

value.value = " "

}















//     alert("class is avalible")
// }else{
//     alert("Not avalible")
// }
