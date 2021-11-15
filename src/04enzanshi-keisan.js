//演算子
const enzan1 = 1 + 2;
console.log(enzan1);

const enzan2 = 3 - 1;
console.log(enzan2);

const enzan3 = 3 * 4;
console.log(enzan3);

const enzan4 = 12 / 2;
console.log(enzan4);

const enzan5 = 10 % 3;
console.log(enzan5);

let enzan6 = 10;
console.log(enzan6); //10
console.log(++enzan6); //11
console.log(enzan6); //11
//演算子が先だと加算した後に変数を出力する
let enzan7 = 13;
console.log(enzan7); //13
console.log(enzan7++); //13
console.log(enzan7); //14
//演算子が後ろだと変数を出力した後に加算される

let enzan8 = 10;
console.log(enzan8); //10
console.log(--enzan8); //9
console.log(enzan8); //9

let enzan9 = 12;
console.log(enzan9); //12
console.log(enzan9--); //12
console.log(enzan9); //11
