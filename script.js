var timerCount;
var currentQuestionNumber;
var isCompleted=false;
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

]




  var container=document.querySelector(".container");
  var wrapper1 = document.querySelector("#wrapper-1");
  var startButton=document.getElementById("press");
  var timerElement=document.getElementById("timer");
  var wrapper2= document.querySelector("#wrapper-2");
  var answers = document.getElementById("answers");
  var displayMessage = document.getElementById("displayMessage");
  var answerStatus = document.getElementById("answerStatus");
  var correctAnswer = document.getElementById("correctAnswer");
  var question = document.getElementById("question");
var answer1=document.getElementById("answer1");
var answer2=document.getElementById("answer2");
var answer3=document.getElementById("answer3");
var answer4=document.getElementById("answer4");
  startButton.addEventListener("click", ()=>{
    startQuiz()
  }
  
  )
  

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
      timerCount =timerCount-10;
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
      isCompleted=true;
      console.log('YourScore '+ timerCount)
    }
    setTimeout(function(){

   
    displayMessage.setAttribute("style","display:none")
    }, 1000); 
 
  })

  function startQuiz(){
    currentQuestionNumber=0;
 //step 1
    removeMainWrapper();
 //step 2
      startTimer();    
  //step 3 bring quiz template
  question.textContent=questionList[currentQuestionNumber].question
    answer1.textContent=questionList[currentQuestionNumber].answers[0];
    answer2.textContent=questionList[currentQuestionNumber].answers[1];
    answer3.textContent=questionList[currentQuestionNumber].answers[2];
    answer4.textContent=questionList[currentQuestionNumber].answers[3];
  wrapper2.setAttribute("style","display:block")
  }




  function removeMainWrapper(){
    wrapper1.classList.add("removed")
    wrapper1.remove()
   }


  function startTimer() {
  timerCount=100
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
  
  
      if(isCompleted && timerCount>0)
      { 
        clearInterval(timer);
          console.log("Win")
         
      }

   
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        // loseGame();
      }
    }, 1000);
  }



