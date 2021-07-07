var event, answerCorrect=0, money = 0;
var ok = false;
startGame();
function startGame() {
	for (var i=0; i<questions.length; i++) {
		do {
			event = +prompt(questions[i].q + "\n"
			+ "1. " + questions[i].a1 + "\n"
			+ "2. " + questions[i].a2 + "\n"
			+ "3. " + questions[i].a3 + "\n"
			+ "4. " + questions[i].a4 +"\n"
			+ "-1 - Выход из игры");
			if (event == -1) {
				break;
			}
			else {
				ok = isAnswer(event);
			}
		} while (!ok);
		if (event == questions[i].correct){
			answerCorrect++;
			if (i<4) {
				money+=100;
			}
			else if (i>=5){
				money+=1000;
			}
		} else {
			break;
		}
	}
	alert("Количество правильных ответов: " + answerCorrect + "\n Вы заработали денег: " + money);
}

function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 4) {
        alert("Вашего ответа " + event + " нет среди допустимых ответов");
        return false;
    } else (event == -1)
	return true;
}
