function updateForm(balansMsg, gamePlanMsg, buttonText, isVisibile) {
    let field = document.getElementById("infBet");

    if(isVisibile) {
        field.style.display = "unset";
    }
    else {
        field.style.display = "none";
    }

    field.innerHTML = "";
    document.getElementById("balans").innerHTML = balansMsg;
    document.getElementById("inf-message").innerHTML = gamePlanMsg;
    document.getElementById("roll-button").innerHTML = buttonText;
}