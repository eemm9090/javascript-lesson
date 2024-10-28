let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);//55

// 1周目：sum = sum + numbers[0];  // sum = 0 + 1
// 2周目：sum = sum + numbers[1];  // sum = 1 + 2
// 3周目：sum = sum + numbers[2];  // sum = 3 + 3
// ︙
// 9周目：sum = sum + numbers[8];  // sum = 36 + 9
// 10周目：sum = sum + numbers[9]; // sum = 45 + 10