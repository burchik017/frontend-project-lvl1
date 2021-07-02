import {getRandomNum,} from '../lib.js'

export const progression = () => {
    let firstNum = getRandomNum(90);
    const randomNum = getRandomNum(9);
    let arrNum = [firstNum];
    for (let i = 0; i < 9; i++) {
        firstNum += randomNum;
        arrNum.push(firstNum);
    }
    let correctAnswer = arrNum[randomNum]
    arrNum[randomNum] = ' ... ';

    return [`${arrNum}`, correctAnswer];
};