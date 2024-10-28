//Q１ 変数
let nickname = '倉ちゃん'
let age = 27

console.log('私ニックネームは'+nickname+'です。年齢は'+age+'です。');

//Q２ 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let templateText =`私の好きな言語は${languages[0]}です。次は${languages[3]}nを勉強してみたいです。`

console.log(templateText);

//Q３ オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4 配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 四則演算
let averageAge = (playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length;

console.log(averageAge);

//Q6 関数
function sayHello() {
  return console.log('Hello');
};

sayHello();

let sayWorld = function(){
  return console.log('World');
};

sayWorld();

//Q7 メソッド
user.birthday = '2000-09-27';
console.log(user.birthday);

user.sayHello = function() {
  return console.log('Hello！');
};
user.sayHello();

//Q8 引数
let calc = {};

calc.add = function(x, y) {
  return console.log(x + y);
};
calc.add(3, 4);

calc.add = function(x, y) {
  return console.log(x - y);
};
calc.add(11, 1);

calc.add = function(x, y) {
  return console.log(x * y);
};
calc.add(7, 7);

calc.add = function(x, y) {
  return console.log(x / y);
};
calc.add(25, 5);

//Q9 返り値
function remainder(x, y) {
  return x % y;
};

console.log('5 を 3 で割った余りは ' + remainder(5, 3) + 'です。');

