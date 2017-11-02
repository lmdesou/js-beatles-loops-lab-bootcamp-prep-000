function theBeatlesPlay (musicians, instruments) {
  var newTheBeatlesPlay = [];
  for (let i = 0; i < musicians.length; i++) {
    newTheBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return newTheBeatlesPlay;
}

function johnLennonFacts (array) {
  let i = 0
<<<<<<< HEAD
  var newJohnLennonFacts = [];
  while (i < array.length){
    newJohnLennonFacts.push(array[i] + "!!!");
    i++
  }
  return newJohnLennonFacts;
}

function iLoveTheBeatles(n) {
=======
  while (i < array.length){
    array[i].push("!!!");
    i++
  }
  return array
}

/* function iLoveTheBeatles(n) {
    n = 0
>>>>>>> 0cc1af78c8010e8d30dd7f1f7258aab33120d14f
  var newILoveTheBeatles = [];
    do {
      newILoveTheBeatles.push('I love the Beatles!')
      n++;
    } while (n < 15);
      return newILoveTheBeatles;
<<<<<<< HEAD
}
=======
} */
>>>>>>> 0cc1af78c8010e8d30dd7f1f7258aab33120d14f
