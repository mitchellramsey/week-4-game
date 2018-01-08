//crystal images


imageArray = [
    "assets/images/amethyst.jpg",
    "assets/images/emerald.jpg",
    "assets/images/garnet.jpg",
    "assets/images/sapphire.jpg"
];
var wins = 0;
var losses = 0;
var totalScore;
var targetScore;



//function for creating random numbers for crystals and the game
function randomIntfromInterval(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

//function for producing the images and their random numbers
function crystalProduction() {
    for(var i = 0; i<imageArray.length; i++){
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", imageArray[i]);
        imageCrystal.attr("data-crystalvalue", randomIntfromInterval(1,12));
        $("#crystalLocation").append(imageCrystal);
        
    }
}

//function to reset crystals
function resetCrystals () {
    $("#crystalLocation").empty();
    for(var i = 0; i<imageArray.length; i++){
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", imageArray[i]);
        imageCrystal.attr("data-crystalvalue", randomIntfromInterval(1,12));
        $("#crystalLocation").append(imageCrystal);
        
    }
}

//function to produce random score to achieve
function scoreNeededForWin(){
    targetScore = randomIntfromInterval(19,120)
    $("#randomNumber").text(targetScore);
}

//function for gameplay
function gameplay (){
    
    $(".crystal-image").click(function(){  
        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        $("#totalScore").text(totalScore);
        if(totalScore === targetScore){
            wins +=1;
            $("#winsNumber").text(wins);
            alert("You won the round!");
            continueGame();
        }
        else if(totalScore>targetScore){
            losses +=1;
            $("#lossesNumber").text(losses);
            alert("Unfortunately, you lost this round.");
            continueGame();
        }
    });
}

function initializeGame() {
    crystalProduction();
    scoreNeededForWin();
    totalScore=0;
    gameplay();
}

function continueGame () {
    scoreNeededForWin();
    resetCrystals();
    totalScore=0;
    $("#totalScore").text(totalScore);
    gameplay ();
}

initializeGame();
