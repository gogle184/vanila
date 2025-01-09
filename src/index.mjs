/**
 * const,letの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // varは上書きできる
// val1 = "var上書き";
// console.log(val1);

// var val1 = "var再宣言";
// console.log(val1);

// let val1 = "var変数";
// console.log(val1);

// letは上書きできる
// val1 = "var上書き";
// console.log(val1);

// ただし再宣言できない
// let val1 = "var変数";

// const val1 = "const変数";
// console.log(val1);

// constは上書きできない
// val1 = "const上書き";

//constは再宣言もできない

//constで定義したオブジェクトはプロパティ（中身）は変更可能
const val2 = {
  name: "a",
  age: "b",
};
console.log(val2);
val2.name = "g";
val2.age = 99;
console.log(val2);
