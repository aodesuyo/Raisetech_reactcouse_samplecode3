const trueFlag = true;
const falseFlag = false;

trueFlag && console.log("A");
//左辺がtrueなのでかつになる可能性が残っている
//右辺に移動する→Aが出力される
falseFlag && console.log("B");
//左辺がfalse。かつは右辺と左辺がごちらも真でいないといけない
//右辺がどうであれ答えは変わらない。評価をやめて右辺までいかない
trueFlag || console.log("C");
//左辺がture。または、はどちらか片方がtureなら答えは出そろった.
//評価をやめて右辺までいかない
falseFlag || console.log("D");
//左辺がfalse。またはになる可能性は残っている
//右辺に移動してDが出力される

if (!falseFlag) {
  console.log("実行しますよん");
} //falseでない=実行される
if (falseFlag) {
  console.log("実行します");
} else {
  console.log("実行しません");
} //!がないとfalse=実行しないとなる

const result1 = trueFlag ? "tureです" : "falseです";
console.log(result1);

const result2 = falseFlag ? "tureです" : "falseです";
console.log(result2);
