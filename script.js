//variables
var timerCount;
var currentQuestionNumber;
var isCompleted=false;
var score=0;
var scoreObject;
var highScores=[];

//containers and wrappers and header
var container=document.querySelector(".container");
var wrapper1 = document.querySelector("#wrapper-1");
var wrapper2 = document.querySelector("#wrapper-2");
var wrapper3= document.querySelector("#wrapper-3");
var wrapper4= document.querySelector("#wrapper-4");
var header= document.querySelector("#header");

//button and timer
var startButton=document.getElementById("press");
var timerElement=document.getElementById("timer");
var timeDiv=document.getElementById("time");
var clear=document.getElementById("clear");
var viewHigh=document.getElementById("viewHigh");

//question and answers
var answers = document.getElementById("answers");
var displayMessage = document.getElementById("displayMessage");
var answerStatus = document.getElementById("answerStatus");
var correctAnswer = document.getElementById("correctAnswer");
var question = document.getElementById("question");
var answer1=document.getElementById("answer1");
var answer2=document.getElementById("answer2");
var answer3=document.getElementById("answer3");
var answer4=document.getElementById("answer4");
var finalScore=document.getElementById("finalScore");

//forms
var sumbitButton=document.getElementById("sumbitButton");

//list
var list = document.querySelector("#list");

//data
const questionList=[
{
question:"Inside which HTML element do we put the JavaScript?",
answers:['<js>','<javascript>','<scripting>','<script>'],
correctAnswer:'<script>'
},
{
  question:"Where is the correct place to insert a JavaScript?",
  answers:['<head>','<title>','<header>','<body>'],
  correctAnswer:'<body>'
  },
{
    question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers:['<script href="xxx.js">','<script src="xxx.js">','<script name="xxx.js">','<script="xxx.js">'],
    correctAnswer:'<script src="xxx.js">'
  },
    {
      question:"How do you write 'Hello' in an alert box?",
      answers:['msg("Hello")','alertbox("Hello")','alert("Hello")','alert(Hello)'],
      correctAnswer:'alert("Hello")'
      },

      {
        question:"Inside which HTML element do we put the JavaScript?",
        answers:['<js>','<javascript>','<scripting>','<script>'],
        correctAnswer:'<script>'
        },
        {
          question:"Where is the correct place to insert a JavaScript?",
          answers:['<head>','<title>','<header>','<body>'],
          correctAnswer:'<body>'
          },
          {
            question:"What is the correct syntax for referring to an external script called 'xxx.js'9?",
            answers:['<script href="xxx.js">','<script src="xxx.js">','<script name="xxx.js">','<script="xxx.js">'],
            correctAnswer:'<script src="xxx.js">'
            },
            {
              question:"How do you write 'Hello' in an alert box10?",
              answers:['msg("Hello")','alertbox("Hello")','alert("Hello")','alert(Hello)'],
              correctAnswer:'alert("Hello")'
              },
              {
                question:"How do you write 'Hello' in an alert box?",
                answers:['msg("Hello")','alertbox("Hello")','alert("Hello")','alert(Hello)'],
                correctAnswer:'alert("Hello")'
                },
          
                {
                  question:"Inside which HTML element do we put the JavaScript?",
                  answers:['<js>','<javascript>','<scripting>','<script>'],
                  correctAnswer:'<script>'
                  },

      

]





//start button listener
  startButton.addEventListener("click", ()=>{
    startQuiz()
  }
  
  )
  
//answer listener
  var answerListener= answers.addEventListener("click", (event)=>{
   
    //check here the answers
    var currentRecord= questionList[currentQuestionNumber];
    //console.log(event.target.innerText)
    if(currentRecord.correctAnswer===event.target.innerText){
      displayMessage.setAttribute("style","display:block")
      answerStatus.textContent="Correct";
      correctAnswer.textContent=currentRecord.correctAnswer
    }
    else{
      displayMessage.setAttribute("style","display:block")
      answerStatus.textContent="Wrong";
      correctAnswer.textContent=currentRecord.correctAnswer
      timerCount=timerCount-10
    }

    if (currentQuestionNumber<questionList.length-1){
      currentQuestionNumber++;
      question.textContent=questionList[currentQuestionNumber].question
      answer1.textContent=questionList[currentQuestionNumber].answers[0];
      answer2.textContent=questionList[currentQuestionNumber].answers[1];
      answer3.textContent=questionList[currentQuestionNumber].answers[2];
      answer4.textContent=questionList[currentQuestionNumber].answers[3];
 
      displayMessage.setAttribute("style","display:block")
    }

    else{

      timeDiv.setAttribute("style","display:none");

      isCompleted=true;

    //remove warpper 2 and bring wrapper 3
    removeWrapper(wrapper2);
    showWrapper(wrapper3);
    finalScore.textContent=timerCount
    score =timerCount
    }


    setTimeout(function(){

   
    displayMessage.setAttribute("style","display:none")
    }, 2000); 
 
  })

  function startQuiz(){
    currentQuestionNumber=0;
 //step 1
   removeWrapper(wrapper1);
 //step 2
      startTimer();    
  //step 3 bring quiz template
    question.textContent=questionList[currentQuestionNumber].question
    answer1.textContent=questionList[currentQuestionNumber].answers[0];
    answer2.textContent=questionList[currentQuestionNumber].answers[1];
    answer3.textContent=questionList[currentQuestionNumber].answers[2];
    answer4.textContent=questionList[currentQuestionNumber].answers[3];
    showWrapper(wrapper2);
  }




  function removeWrapper(element){
    element.classList.add("removed")
    element.remove()
   }
   function showWrapper(element){
    element.setAttribute("style","display:block")
   }


  function startTimer() {
  timerCount= 100
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
  
  
      if(isCompleted && timerCount>0)
      {  
       
        clearInterval(timer);
      
         
      }

   
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        removeWrapper(wrapper1);
        removeWrapper(wrapper2)
        showWrapper(wrapper3);
  


      }
    }, 1000);
  }

  sumbitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log()
    scoreObject={
      intial:document.querySelector("#initialInput").value.trim(),
      score:score
    }

    renderScore()
    removeWrapper(wrapper3);
    showWrapper(wrapper4);
    // we dont required header here too
  header.setAttribute('style',"display:none")

    var arraysinOrder= orderScoresObjects(highScores);
    arraysinOrder.forEach(element => {
      var li = document.createElement("li");
      li.textContent=element.intial +" "+ element.score
      list.append(li)
  });
  
  })

  function renderScore(){
    var socresasJson = JSON.parse(localStorage.getItem("scores"));
  
    if (socresasJson !== null) {
     
    
     highScores= [...socresasJson,scoreObject]
    }
    else
    {
     highScores.push(scoreObject)
    }
    localStorage.setItem("scores", JSON.stringify(highScores));
  }

  function orderScoresObjects(arrayList){
    arrayList.sort((a, b) => {
      return b.score - a.score;
  });
  return arrayList;

  }

  clear.addEventListener('click',()=>{
    localStorage.clear();
    highScores=[];
    list.remove();
  })

  viewHigh.addEventListener('click',()=>{
    removeWrapper(wrapper1);
    removeWrapper(wrapper2);
    removeWrapper(wrapper3);
    showWrapper(wrapper4);
  });




