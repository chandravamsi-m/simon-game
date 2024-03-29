var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []
var userClickedPattern = []

var started = false
var level = 0


$(document).keypress(function() {
    if(!started){
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }
})


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
})

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success")
    if(userClickedPattern.length === gamePattern.length){

    }
}
    else{
        console.log("wrong")
    }
}


function nextSequence() {
    level++;
    $("#level-title").text("level " + level);

    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor)
}


function playSound(name) {
    var audio = new Audio("./sounds/"+ name +".mp3")
    audio.play()
}


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")

    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed")
    },100)
}

