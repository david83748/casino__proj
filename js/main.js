let money = 1000
let tempMoney = money;
let currentGameStage = "new"; 
let pointGame;

function clickButton() {
    
    let [firstCube, secondCube] = tossUp();
    let infBet = document.getElementById("infBet").value;
    if(isNaN(infBet) || infBet < 1 || infBet > money) {  
        errorMsg();
    }
    else if(currentGameStage == "new") {
        generallGamePlan(firstCube, secondCube, infBet); 
    }
    else if(currentGameStage == "pointGame") {
        pointGamePlan(firstCube, secondCube, infBet); 
    }
    else {
        currentGameStage = "new";
        money = tempMoney;
        mainMessage();
    }
}
