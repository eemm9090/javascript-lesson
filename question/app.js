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

//Q３ 配列×オブジェクト
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

