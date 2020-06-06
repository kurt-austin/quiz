var goBack = document.querySelector("#GoBack");
var highScoresP = document.querySelector("#highscores");
var highScoresOL = document.createElement("ol");


// parses the local storage back into an array and then loops through the array and creates and appends li elements under an ol element in HTML.

var arr = JSON.parse(localStorage.getItem("gamescores"));



 for (var k=0; k< arr.length; k++){
   var li = document.createElement("li")
   li.textContent = arr[k];
   highScoresOL.appendChild(li);
   highScoresP.appendChild(highScoresOL);
    
 }


// Go Back button to the beginning of the quiz.

goBack.addEventListener('click', function(event){
    event.preventDefault();
      location.href = "index.html";
 
  })

  // Clears High Scores from Local Storage

ClearHighScores.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.clear();
    highScoresOL.style.display = "none";  
 
  })