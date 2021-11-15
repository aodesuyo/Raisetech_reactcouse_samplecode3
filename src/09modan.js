//文字列の連結
const name = "テッくん";
const age = 40;
//従来の書き方
const sentense = name + "は" + age + "歳です";
console.log(sentense);
//テンプレート文字列
const modansentense = `${name}は${age}歳です`;
console.log(modansentense);

//関数定義
const func1 = function (name) {
  return `${name}です!`;
};
//アロー関数だと
const func2 = (name) => {
  return `${name}です!`;
};
console.log(func1("テッくん"));
console.log(func2("岡田"));
//アロー関数は引数が一つの場合()を省略できる
const func3 = (name) => {
  return `${name}です!`;
};
console.log(func3("佐藤"));
//複数あるときは,で区切る
const func4 = (name, age) => {
  return `${name}です。${age}歳です。`;
};
console.log(func4("田中", 60));

//処理が1行で終わるときは{}とreturnを省略可能
const func5 = (name) => `${name}です`;
console.log(func5("山田"));

//{}を()で囲み1つの塊として認識させることも可能
const func6 = () => ({
  name: "テッくん",
  age: 40
});
console.log(func6());
