var event, ok;
var answer = []; //массив для хранения ответов

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры'); //Вопрос 1 с вариантами ответов
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
		if (event == 1) {
			answer[0] = works.a1;
		} else {
			answer[0] = works.a2;
		}
	}
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
			event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры'); //Вопрос 2 с вариантами ответов
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
  				if (event == 1){
					answer[1] = works.d1;
				} else {
					answer [1] = works.d2;
				}
			}
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
						if (event == 1){
							answer[1] = works.d1;
						} else {
							answer [1] = works.d2;
							}
					}
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
						if (event == 1){
							answer[2] = works.d1;
						} else {
							answer [2] = works.d2;
							}
					}						
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
				if (event == 1){
					answer[1] = works.c1;
				} else {
					answer [1] = works.c2;
				}
			}
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
						if (event == 1){
							answer[2] = works.d1;
						} else {
							answer [2] = works.d2;
						}
					}
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
 						if (event == 1){
							answer[2] = works.d1;
						} else {
							answer [2] = works.d2;
						}
					}
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
while (event != -1) {	
var myanswers = +prompt("введите номер вопроса (1-3), для просмотра выбранного ответа.");
	switch (myanswers) {
		case 1:
			alert ("На вопрос:\n" + works.a00 + "вы ответили:\n" + answer[0]);
		break;
		case 2:
			alert ("На вопрос:\n" + works.b00 + "вы ответили:\n" + answer[1]);
		break;			
		case 3:
			alert ("На вопрос:\n" + works.c00 + "вы ответили:\n" + answer[2]);
		break;
		case -1:
			break;
		default:
			alert("Ошибка");
	}
}

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    } else (event == -1)
	return true;
    
}

