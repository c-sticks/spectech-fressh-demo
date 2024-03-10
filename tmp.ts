import aaa from "./tmp2.ts";

// 関数の定義
function nothing() {
  console.log("nothing happen");
}

function add(a: number, b: number): string {
  return `a + b = ${a + b}`;
}

nothing();
console.log(add(11, 22));

// 型の定義

interface Human {
  name: string;
  age: number;
  address: string;
  isMale: boolean;
}

function printHuman(human: Human) {
  aaa();
  console.log(
    `name: ${human.name}, age: ${human.age}, address: ${human.address}, isMale: ${human.isMale}`,
  );
}

printHuman({
  name: "taro",
  address: "tokyo",
  age: 20,
  isMale: true,
});
