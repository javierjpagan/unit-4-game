    //Variables
    let bluescore;
    let greenscore;
    let redscore;
    let yellowscore;
    let playerNum;
    let targetNum;
    let wins = 0;
    let losses = 0;

    // on click Events

    $("#crystalBlue").on("click", function() {
        playerNum += bluescore;
        $("#playerScore").text(playerNum);
        checkWin();

    });
    $("#crystalGreen").on("click", function() {
        playerNum += greenscore;
        $("#playerScore").text(playerNum);
        checkWin();

    });
    $("#crystalRed").on("click", function() {
        playerNum += redscore;
        $("#playerScore").text(playerNum);
        checkWin();

    });
    $("#crystalYellow").on("click", function() {
        playerNum += yellowscore;
        $("#playerScore").text(playerNum);
        checkWin();

    });

    //Reset on page load
    $(document).ready(function() {
        resetGame();
    })
    
    //Random number
    function randomNum(max) {
        var random = Math.floor(Math.random() * max) + 1;
        return random;
    }


    //Game reset
    function resetGame() {
        playerNum = 0;
        targetNum = randomNum(120);
        $("#playerScore").text(playerNum);
        $("#targetScore").text(targetNum);
        bluescore = randomNum(12);
        console.log("Blue gem: " + bluescore);
        greenscore = randomNum(12);
        console.log("Green gem: " + bluescore);
        redscore = randomNum(12);
        console.log("Red gem: " + bluescore);
        yellowscore = randomNum(12);
        console.log("Yellow gem: " + bluescore);
    }

    //Game results
    function checkWin() {
        if (playerNum === targetNum) {
            $("#playerScore").text(0);
            wins++;
            $("#winText").text(wins);
            resetGame();
        } else if (playerNum > targetNum) {
            $("#playerScore").text(0);
            losses++;
            $("#lossText").text(losses);
            resetGame();
        }
    }