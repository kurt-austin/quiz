var goBack = document.querySelector("#GoBack");
var highScoresP = document.querySelector("#highscores");
var highScoresTitle = document.querySelector("#quiz-title");

console.log(localStorage.length);

for (var k=0; k< localStorage.length; k++){
    var li2 = document.createElement("li");
    li2.textContent = localStorage.getItem("initials") + " - " + localStorage.getItem("highscore");
    console.log(li2.textContent);
    li2.appendChild(highScoresP);

}

// highScoresP.textContent = localStorage.getItem("initials") + " - " + localStorage.getItem("highscore");


goBack.addEventListener('click', function(event){
    event.preventDefault();
      location.href = "index.html";
 
  })


ClearHighScores.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.clear();
    highScoresTitle.style.display = "none";  
 
  })