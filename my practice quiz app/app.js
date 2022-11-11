let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];

window.onload = function(){
    show(1);
}
44
function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }

  let question_count = 0;

  function next(){
    question_count++;
      console.log(question_count)
      
  }

  function show(count){
     
      let question = document.getElementById("questions");

      // questions.innerHTML  = "<h2>" +  questions[1].question + "</h2>";
      questions.innerHTML  = `<h2>${questions[count].question} </h2>
      <ul class="option_group">
      <li class="option">12</li>
      <li class="option">144</li>
      <li class="option">12<sup>3</sup> </li>
      <li class="option">None of these</li>
  </ul> `

  }



  // let question_count = 0;
  // let points = 0;
  
  // window.onload = function() {
  //   show(question_count);
  
  // };