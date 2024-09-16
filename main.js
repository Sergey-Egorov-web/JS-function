function switchOfStuff(val) {
  let answer = "d";
  // Only change code below this line
  switch (answer) {
    case "a":
      "apple";
      break;
    case "b":
      "bird";
      break;
    case "c":
      "cat";
      break;
    default:
      "stuff";
      break;
  }

  // Only change code above this line
  //  return answer;
  console.log(answer);
}

switchOfStuff(1);

//__________________________________________________________
/* let games = new Array("3:1", "2:2", "0:1");
let scores = 0;
for (let i = 0; i < games.length; i++) {
  if (games[i].charAt(0) > games[i].charAt(2)) {
    scores += 3;
  } else if (games[i].charAt(0) == games[i].charAt(2)) {
    scores += 1;
  }
}
console.log(scores); */

//___________________________________________________________
/* let arr1 = new Array(2, 5, 7, 15);
let arr2 = new Array(12, 51, 17, 85);
console.log(arr1);

console.log(arr2);

let arr3 = arr1.concat(arr2);

console.log(arr3);

let sum = arr3.reduce((prev, current) => (prev += current));

console.log(sum);  */

//_____________________________________________________________
/* let str = "";
const num = 3;
let array = new Array();
for (let i = 0; i < num; i++) {
  str += `${i + 1} sheep...`;
}

console.log(str); */

//______________________________________________________________

/* year = 1700;
let num = year / 100;

console.log(num);
let remains = year % 100;
if (remains == 0) {
  console.log(num);
} else console.log(Math.ceil(num));
*/
//_________________________________________________________________
/*

function minimum(list) {
  let min = 0;
  console.log(list.length);
  for (let i = 0; i < list.length; i++) {
    if (min > list[i]) {
      min = list[i];
    }
  }
  console.log(min);
  return min;
}

function maximum(list) {
  let max = 0;
  for (i = 0; i < list.length; i++) {
    if (max < list[i]) {
      max = list[i];
    }
  }
  console.log(max);
  return max;
}

const array = new Array(2, -5, 132, -11, 0, -54);
console.log(array);

minimum(array);
maximum(array);

*/

//____________________________________________________________
/*
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  console.log(sum);
  console.log(classPoints);
  classPoints.forEach((n) => (sum = sum + n));
  console.log(sum);
  console.log(classPoints.length);
  let average = (sum + yourPoints) / (classPoints.length + 2);
  console.log(average);
  if (yourPoints > average) {
    return "true";
  } else {
    return "false";
  }
}

betterThanAverage([3, 4, 5], 4);  */

//______________________________________________________
// получаем число, преобразовываем его в массив и после этого меняем элементы массива местами
/*
function solution(num) {
  let array = ("" + num).split("").map(function (digit) {
    return +digit;
  });
  console.log(array);
  array.reverse("");
  console.log(array);
}
solution(23436);
*/
// console.log(solution("world"));
//______________________________________________
/*
function solution(str) {
  let amount = 0;
  let array = str.split("");
  array.reverse("");
  // let reversedArray = array.toReverced();
  console.log(array);
  // console.log(reversedArray);

  let reversestr = array.join("");
  return reversestr;
}

console.log(solution("world"));
*/

//___________________________________________________________________
/*
let h = 2;
let m = 40;
let s = 45;

let time = (h * 3600 + m * 60 + s) * 60;

console.log(time);
*/
// document.write("<h2> Первая программа на JavaScript</h2>");
//--------------------------------------------------------------
/*
const busStops = [
  [2, 1],
  [5, 3],
  [7, 4],
];

function numbers(busStops) {
  let passengers = 0; // начальное число пассажиров

  for (let i = 0; i < busStops.length; i++) {
    //console.log(busStops[i][1]);

    console.log(typeof busStops[i][1]);

    console.log(typeof passengers);

    passengers = +passengers + +busStops[(i, 0)];

    console.log(typeof passengers);

    console.log(passengers);

    // passangers -= busStops[(i, 1)];

    //console.log(passangers);
  }
  //  console.log(passangers);
}

numbers(busStops);
*/
//--------------------------------------------------------------
//Функция считает сколько лет пройдёт прежде чем город от начального числа жителей (p0) дорастёт до требуемого числа (p)
/*
let p0 = 1000; //начальное население
let percent = 2; // процент ежегодного прироста (рождаемости) жителей
let aug = 200; // сколько новых жителей приезжает в город каждый год
let p = 5000; // необходимое количество населения

function nbYear(p0, percent, aug, p) {
  let i = 0;
  do {
    p0 = Math.trunc(p0 + p0 * (percent / 100) + aug);

    console.log(p0);
    i++;
  } while (p0 < p);
  console.log(i); // ш количеств лет которое пройдёт до требуемого населения
}

nbYear(p0, percent, aug, p);
*/
//-----------------------------------------------------------------------
/* const friends = ["Ryan", "Kieran", "Jason", "Yous"];

function friend(friends) {
  console.log(friends);

  const yourFriend = friends.filter((n) => n.length == 4);

  console.log(yourFriend);
}

friend(friends); */

/* if (number % 2 == 0) {
    return "Even";
  } else return "Odd";
}

const result = evenOrOdd(0);

console.log(result); */
