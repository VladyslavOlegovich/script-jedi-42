//http://www.codewars.com/kata/571edd157e8954bab500032d
const v1 = 50;
const v2 = 100;
const v3 = 150;
const v4 = 200;
const v5 = 2;
const v6 = 250;
function equal1() {
  const a = v1;
  const b = v1;
  return a + b;
}
function equal2() {
  const a = v3;
  const b = v1;
  return a - b;
}
function equal3() {
  const a = v5;
  const b = v1;
  return a * b;
}
function equal4() {
  const a = v4;
  const b = v5;
  return a / b;
}
function equal5() {
  const a = v6;
  const b = v3;
  return a % b;
}

//http://www.codewars.com/kata/571edea4b625edcb51000d8e
const a1 = "A";
const a2 = "a";
const b1 = "B";
const b2 = "b";
const c1 = "C";
const c2 = "c";
const d1 = "D";
const d2 = "d";
const e1 = "E";
const e2 = "e";
const n1 = "N";
const n2 = "n";
function Dad() {
  return d1 + a2 + d2;
}
function Bee() {
  return b1 + e2 + e2;
}
function banana() {
  return b2 + a2 + n2 + a2 + n2 + a2;
}
function answer1() {
  return "no";
}
function answer2() {
  return "no";
}
function answer3() {
  return "yes";
}

//http://www.codewars.com/kata/571effabb625ed9b0600107a
function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}

//http://www.codewars.com/kata/571f1eb77e8954a812000837
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
