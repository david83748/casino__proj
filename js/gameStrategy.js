
function generallGamePlan(firstCube, secondCube, infBet) {   // основнаая игра
    let sum = firstCube + secondCube;

    if(sum == 7 || sum == 11) {
        setWinStage(firstCube, secondCube, infBet);
    }
    else if(sum == 2 || sum == 8 || sum == 12) {
        setLoseStage(firstCube, secondCube, infBet);
    }
    else {
        currentGameStage = "pointGame";
        pointGame = sum;
        messagePointGame(firstCube, secondCube, infBet);
    }
}

function pointGamePlan(firstCube, secondCube, infBet) {  // игра с поинтами 
    let sum = firstCube + secondCube;

    if(sum == pointGame) {
        setWinStage(firstCube, secondCube, infBet);;
    }
    else if(sum == 7) {
        setLoseStage(firstCube, secondCube, infBet);
    }
    else {
        messagePoint(firstCube, secondCube, infBet);
    }
}

function setWinStage(firstCube, secondCube, infBet) {
    currentGameStage = "win";
    tempMoney = money + infBet * 2;
    messageWin(firstCube, secondCube, infBet);
}

function setLoseStage(firstCube, secondCube, infBet) {
    currentGameStage = "lose";
    tempMoney = money - infBet;
    messageLose(firstCube, secondCube, infBet);
}