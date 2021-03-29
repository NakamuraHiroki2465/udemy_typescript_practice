//文字列型
var title: string = "Angular";

title = "Angular!";

//数値型
var n: number = 0;

//真偽値型
var isOpen: boolean = true;

//配列型
var keywords: (string | number)[] = ["name", "email", "body", 0];

//タプル型
var payment: [number, string, number] = [1, "apple", 0];

//オブジェクト型
var object: { [key: string]: string } = {
  name: "Nakamura Hiroki",
  id: "test"
};

var post: object = {
  name: "nakamurahiroki"
};

//共用型(Union型)
var sample: string | number | boolean;
sample = "Yohei";
sample = 100;
sample = true;

//enum型
enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13
}

console.log(KeyCode.Backspace); // = 8

enum ErrorCode {
  OK = 200,
  BAD_RESPONSE = 400,
  UNAUTHORIZED = 40
}

console.log(ErrorCode.OK);

//Enum型は柔軟な型を入れることが可能
enum Character {
  Bob, //0
  Dad, //1
  Mom //2
}

//any型(Javasriptと同じ）)
var something: any = "foo";
something = 100;
something = true;
something = { id: 1 };

//null,undefined型
var el: Element | null = document.querySelector("#app");
var foo: undefined = undefined;

//型推論（文字列として扱われる）
var unknown = "string";

let foo1 = "foo";

let date = new Date();

//varはifの外でも有効（スコープ）
if (true) {
  var foo3 = "foo";
}
console.log(foo3);

//letはfooの中でしか有効にならない（スコープ）
if (true) {
  let foo4 = "foo";
}

//console.log(foo4);

var hoge = "hoge";

function logHoge() {
  console.log(hoge);
}

let template1 = "This is Template string.";

let name = "nakamura hiroki";
let template2 = `Hello TypeScript tutrorial.
  Thank you . ${name}
`;
console.log(template2);

let categories = ["post", "news", "info"];
console.log(...categories);

//複製
let copyCat = [...categories];

console.log(copyCat);

//連結
let pushCat = ["other", ...categories];

console.log(pushCat);

let unshiftCat = [...categories, "unshift"];
console.log(unshiftCat);

let insertCat = ["other", ...categories, "Q&A"];
console.log(insertCat);

//２つの配列をマージ
let mergeCat = [...categories, ...copyCat];
console.log(mergeCat);

//オブジェクト
let post1 = { id: 1, content: "dummy", created: "2020-04-01" };

let copyObj = { ...post1 };
console.log(copyObj);

//上書きのケース
let pushObj = {
  ...post1,
  created: "2020-04-05"
};

console.log(pushObj);

//配列の中にオブジェクトは入れられない
//オブジェクトの中に配列を入れる事が可能（インデックスがキーになる）
let test = { ...categories };

//分割代入
let categories1 = ["post", "news", "info", "other"];

let [a, b, c, d] = categories1;
console.log(a, b, c, d);

let [e, f, ...other] = categories1;
console.log(e, f, other);

//変数の初期値を設定できる
let [g = 10, h = 7] = [1];

console.log(g, h);

let post3 = { id2: 1, content: "dummy", created: "2020-04-01" };
const { id2 } = post3;

console.log(id2);

//関数
function greet(name: string = "Nakamura"): void {
  console.log(`
    Hello World! 
    ${name}
  `);
}

greet("Hiroki");

//可変長引数
function sum(...values: number[]): number {
  return values.reduce(function(prev, current) {
    return prev + current;
  });
}
console.log(sum(1, 3, 5, 9));

//アロー関数
//() => {};

let add = (x1: number, x2: number): number => {
  return x1 + x2;
};

console.log(add(1, 3));

let hello = name => `Hello, ${name}!`;

console.log(hello("Hiroki"));

// thisの参照先
document.getElementById("button1").addEventListener("click", function() {
  console.log(this); //<button></button>
});

//arrow関数のthisの参照先
document.getElementById("button1").addEventListener("click", () => {
  console.log(this); //window
});
