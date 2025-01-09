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
// const val2 = {
//   name: "a",
//   age: "b",
// };
// console.log(val2);
// val2.name = "g";
// val2.age = 99;
// console.log(val2);

/**
 * テンプレート文字列
 * ``だと${}がいける
 */
// const name = "fafa";
// const age = 31;

// const messages2 = `私の名前は${name}です。名前は${age}歳です`;
// console.log(messages2);

/**
 * アロー関数
 * 引数１つの場合は括弧省略していい
 */
//従来
// function func1(str) {
//   return str;
// };
// console.log(func1("funcやで"));
// const func2 = (引数) => {
//   中身;
// };
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("これはアロー"));
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 3));

/**
 * 分割代入(オブジェクトの場合)
 */
// const myProfile = {
//   name: "fafa",
//   age: 31,
// };
//以下のように書くのはめんどくさい
// const message1 = `名前は${myProfile.name}です。歳は${myProfile.age}だよ`;
//分割代入すると以下のようにかける
// const { name, age } = myProfile;
// const message1 = `名前は${name}です。歳は${age}だよ`;
// console.log(message1);
// 配列の場合、自分で変数を決める
// const myProfile = ["fafa", 30];
// const [name, age] = myProfile;
// const message1 = `名前は${name}です。歳は${age}だよ`;
// console.log(message1);
/**
 * デフォルト値（引数、分割代入）
 * 基本はundefinedになる
 */
// const sayHello = (name = "ゲスト") => console.log(`今日は!${name}さん`);
// sayHello();
/**
 * オブジェクトの省略記号
 */
// const name = "fafa";
// const age = 31;
//以下を次のようにできる
// const myProfile = {
//   name: name,
//   age: age,
// };
// const myProfile = {
//   name: name,
//   age: age,
// };
// console.log(myProfile);
/**
 * mapやfilter
 */
const nameArr = ["田中", "山田", "fafa"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// nameArr.map((name) => {
//   console.log(name);
// });
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   if (name == "fafa") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
//参考演算
//条件 ? true : false
