function mainMessage () {
    let balans = `Ваш баланс: ${money}$`;
    let msg = null;
    let buttonText = `Бросить кости`;

    updateForm(balans, msg, buttonText, true);
}

function messageWin (firstCube, secondCube, infBet) {
    let balans = `Ваш баланс: ${money}$`;
    let msg = 
    `<p>На кубиках числа: ${firstCube}, ${secondCube}</p>
     <p>Вы выиграли, и получаете ваш выигрыш ${infBet*2}$</p>`;
    let buttonText = `Получить`;

    updateForm(balans, msg, buttonText, false);
}

function messageLose (firstCube, secondCube, infBet) {
    let balans = `Ваш баланс: ${money}$`;
    let msg = 
    `<p>На кубиках числа: ${firstCube}, ${secondCube}</p>

     <p>Ваша ставка ${infBet} $ не сыграла</p>`;
     
    let buttonText = `Вернуться на Главную`;

    updateForm(balans, msg, buttonText, false);
}

function  messagePointGame (firstCube, secondCube, infBet) {
    let balans = `Ставка: ${infBet}$`;
    let msg = 
    `
    <p>На кубиках числа: ${firstCube}, ${secondCube}</p>
    <p>Твой поинт :${firstCube + secondCube}</p>`;
    let buttonText = `Бросить Кости еще раз`;

    updateForm(balans, msg, buttonText, false);
}

function messagePoint (firstCube, secondCube, infBet) {
    let balans = `Ставка: ${infBet}$`;
    let msg = 
    `
    <p>На кубиках: ${firstCube}, ${secondCube}</p>
    <p>Продолжай</p>`;
    let buttonText = `Бросить Кости еще раз`;

    updateForm(balans, msg, buttonText, false);
}

function errorMsg() {
    let balans = `Ваш баланс: ${money}$`;
    let msg = 
    `<p>Введите допустимое значение!</p>`;
    let buttonText = `Бросить кости`;

    updateForm(balans, msg, buttonText, true);
}