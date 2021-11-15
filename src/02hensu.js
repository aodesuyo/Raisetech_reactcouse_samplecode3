import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

//変数宣言
const constdayo = "constは再代入・再宣言できない";
console.log(constdayo);

let letdayo = "letは宣言ができない";
console.log(letdayo);
letdayo = "letは再宣言はできないが再代入はできる";
console.log(letdayo);

var vardayo = "varを宣言しました";
console.log(vardayo);
vardayo = "varを再代入したよ";
console.log(vardayo);

//変数の型
const num = 10;
let num2 = num;
num2 = 99;
console.log(num);
console.log(num2);
//プリミティブ型の変数なのでnumは10のまま

const nums = [10, 20];
const nums2 = nums;
nums2[0] = 99;
console.log(nums);
console.log(nums2);
//オブジェクト型の配列が代入されている.
//numsもnums2も同じ場所を参照しに行くため、num[0]も99になる

const hairetu = [10, 20];
hairetu[0] = 100;
hairetu.push(30); //pushは配列を増やす
console.log(hairetu);

const profile = {
  name: "青",
  age: 26 //オブジェクトの値の後は,で終える
};
console.log(profile.name);

profile.name = "青若返り";
profile.age = 17;
console.log(profile);
