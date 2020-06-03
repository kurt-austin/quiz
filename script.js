
// Variable declaration and selection

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var quizTitle = document.querySelector("#quiz-title");
var quizQuestions = document.querySelector("#quiz-questions");
var startBtn = document.querySelector("#StartBtn");
var choiceIdx = 0;
var choice = 0;
var testScore = 0;
var questionScore = 5;
var questionList = document.querySelector("#question-list");
var SubmitBtn = document.querySelector("#SubmitBtn");
var form = document.querySelector("#submit-form")
var highScoresLink = document.querySelector("#high-scores");
var goBack = document.querySelector("#GoBack");
var initialslabel = document.querySelector("#initialslabel");
var highScoresP = document.querySelector("#highscores");
var firstPageTime = document.querySelector("#tick");
var interval;

var quiz = [
      {question: '1.  Commonly used data types do not include:',
       choices: ['A. Strings', 'B. Booleans', 'C. Alerts', 'D. Numbers'],
       answer: 'C'
      },

      {question: '2.  The condition in an If/Else is enclosed within',
       choices: ['A. Quotes', 'B. Curly Brackets', 'C. Parenthesis', 'D. Square Brackets'],
       answer: 'C'
      },

      {question: '3.  Arrays in Javascript can be used to store',
       choices: ['A. Numbers and Strings', 'B. Other Arrays', 'C. Booleans', 'D. All of the Above'],
       answer: 'D'
      },

      {question: '4.  String values must be enclosed within _____ when being assigned to variables  ',
       choices: ['A. Commas', 'B. Curly Brackets', 'C. Quotes', 'D. Parenthesis'],
       answer: 'C'
      },

      {question: '5.  A very useful tool used during development for printing context to the debugger is',
       choices: ['A. Javascript', 'B. Terminal/Bash', 'C. For Loops', 'D. Console Log'],
       answer: 'D'
      }

];

// variable initialization and listening for Start Button calling First Page and Render Questions function.

var idx = 0;
var quizLength=quiz.length;
SubmitBtn.style.display = "none";
form.style.display = "none";
interval = setInterval(function() {
  firstPageTime.textContent = "Time: "+interval
}, 1000);
startBtn.addEventListener('click', function(){
  
  displayFirstPage();
  renderQuestions();
 

})

// Displaying the questions of the quiz and receiving the response(input) and correct/incorrect alerts.

function renderQuestions (){
    
    quizQuestions.textContent = quiz[idx].question;
    questionList.innerHTML = "";

    for (var i = 0; i < quiz[idx].choices.length; i++){
      var li = document.createElement("li");
        li.setAttribute('data-index', i);
      var btn = document.createElement('button')
      btn.textContent = quiz[idx].choices[i];
      btn.setAttribute("class","btn btn-primary");
      li.appendChild(btn);

      questionList.appendChild(li);

     
      li.addEventListener('click',function(event){
        event.preventDefault();
        choiceIdx = parseInt(event.target.parentElement.getAttribute('data-index'));
    
       var choiceAnswer = quiz[idx].choices[choiceIdx];
    
       var ans = quiz[idx].answer;
    
       var shortChoiceAns = choiceAnswer.substring(0,1);
        console.log(shortChoiceAns + " " + ans);
           if (shortChoiceAns !== ans){
             testScore = testScore - questionScore;
             alert("Incorrect!");
           }
            else  {
         testScore = testScore + questionScore;
             alert("Correct!");
                 }
             if (testScore < 0){
               testScore = 0;
             }

          
         console.log("testscore "+testScore+" questionscore "+questionScore);
        
             addAndDisplay();
    
      } )


      
    }
    

}

// increments the index in the question array.

function addAndDisplay(){
  idx++
  if(idx < quizLength){
    
  renderQuestions();

  } else {
    lastPage();
  }
  
}

// Quiz is complete, shows score and allows initial entries into High Scores, stores them and takes you to next page.

function lastPage(){
  
  quizTitle.style.display = "block"
  quizTitle.textContent = "All Done!";
  quizQuestions.textContent = "Your final score is "+testScore;
  questionList.style.display = "none";
  form.style.display = "block";
  SubmitBtn.style.display = "block";
  highScoresLink.style.display = "block";

  

  SubmitBtn.addEventListener('click',function(event){
      event.preventDefault();

    localStorage.setItem("initials", initials);
    localStorage.setItem("highscore", testScore);
    location.replace("index2.html");

    highScoresP.textContent = localStorage.getItem("initials", initials) + localStorage.getItem("highscore", testScore);
    
     goBack.addEventListener('click', function(event){
       event.preventDefault();
         location.href = "index.html";
    
     })

  })
}


function displayFirstPage(){
  quizTitle.style.display = 'none';
  startBtn.style.display = "none";
  form.style.display = "none";
  

}






