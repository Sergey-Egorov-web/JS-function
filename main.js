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
