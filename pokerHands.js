const CARDS_VALUED = {
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  T: 9,
  J: 10,
  Q: 11,
  K: 12,
  A: 13,
};

function findTwoPairs(arr) {
  let pairCount = {};
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    if (pairCount[arr[i]]) {
      pairCount[arr[i]]++;
    } else {
      pairCount[arr[i]] = 1;
    }
  }

  let pairs = 0;
  for (let key in pairCount) {
    if (pairCount.hasOwnProperty(key)) {
      if (pairCount[key] === 2) {
        pairs++;
        if (max < CARDS_VALUED[key]) {
          max = key;
        }
      }
    }
  }

  return [pairs === 2, max];
}

function findThreeOfSameValue(arr) {
  let pairCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (pairCount[arr[i]]) {
      pairCount[arr[i]]++;
    } else {
      pairCount[arr[i]] = 1;
    }
  }

  for (let key in pairCount) {
    if (pairCount.hasOwnProperty(key)) {
      if (pairCount[key] === 3) {
        return key;
      }
    }
  }

  return 0;
}

function findFourOfSameValue(arr) {
  let pairCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (pairCount[arr[i]]) {
      pairCount[arr[i]]++;
    } else {
      pairCount[arr[i]] = 1;
    }
  }

  for (let key in pairCount) {
    if (pairCount.hasOwnProperty(key)) {
      if (pairCount[key] === 4) {
        return key;
      }
    }
  }

  return 0;
}

function getPair(arr) {
  let pairCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (pairCount[arr[i]]) {
      pairCount[arr[i]]++;
    } else {
      pairCount[arr[i]] = 1;
    }
  }

  for (let key in pairCount) {
    if (pairCount.hasOwnProperty(key)) {
      if (pairCount[key] === 2) {
        return key;
      }
    }
  }

  return 0;
}

function findNextHigher(arr, value) {
  return [
    ...new Set(
      arr
        .map((item) => item.slice(0, -1))
        .map((value) => CARDS_VALUED[value])
        .sort((a, b) => a - b)
    ),
  ].slice(-1 * value, -1 * (value - 1))[0];
}

function getLevelOfPlayer(player) {
  const suits = player.map((item) => item.slice(-1));
  const values = player.map((item) => item.slice(0, -1));

  const orderCheckList = values.map((value) => CARDS_VALUED[value]);
  orderCheckList.sort((a, b) => a - b);

  if (new Set(suits).size === 1) {
    const royalRank = Object.keys(CARDS_VALUED).filter(
      (k) => CARDS_VALUED[k] >= 9
    );
    if (new Set(values).size === 5) {
      if (values.filter((value) => royalRank.includes(value)).length === 5)
        return [10, orderCheckList[4]];
    }

    let flag = true;
    for (let i = 0; i < orderCheckList.length - 1; i++) {
      if (orderCheckList[i + 1] - orderCheckList[i] !== 1) {
        flag = false;
        break;
      }
    }
    if (flag) return [9, orderCheckList[4]];
  }
  if (findFourOfSameValue(values))
    return [8, CARDS_VALUED[findFourOfSameValue(values)]];

  if (findThreeOfSameValue(values) && getPair(values))
    return [7, CARDS_VALUED[findThreeOfSameValue(values)]];

  if (new Set(suits).size === 1) return [6, orderCheckList[4]];

  let flag = true;
  for (let i = 0; i < orderCheckList.length - 1; i++) {
    if (orderCheckList[i + 1] - orderCheckList[i] !== 1) {
      flag = false;
      break;
    }
  }
  if (flag) return [5, orderCheckList[4]];

  if (findThreeOfSameValue(values))
    return [4, CARDS_VALUED[findThreeOfSameValue(values)]];

  if (findTwoPairs(values)[0])
    return [3, CARDS_VALUED[findTwoPairs(values)[1]]];

  if (getPair(values)) return [2, CARDS_VALUED[getPair(values)]];

  return [1, orderCheckList[4]];
}

function pokerHands(arr) {
  let player1Level = 0;
  let player2Level = 0;
  let count = 0;
  for (let set of arr) {
    const player1 = set.split(" ").slice(0, 5);
    const player2 = set.split(" ").slice(5);
    player1Level = getLevelOfPlayer(player1);
    player2Level = getLevelOfPlayer(player2);
    if (player1Level[0] > player2Level[0]) {
      count++;
    } else if (player1Level[0] === player2Level[0]) {
      let c = 1;
      if (player1Level[1] > player2Level[1]) count++;
      else if (player1Level[1] === player2Level[1]) {
        const nextHighestPlayer1 = findNextHigher(player1, c + 1);
        const nextHighestPlayer2 = findNextHigher(player2, c + 1);

        console.log(player1,player2,player1Level,player2Level);
        // if (nextHighestPlayer1 > nextHighestPlayer2) count++;
      }
    }
  }
  console.log(count);
  return count;
}

const testArr = [
  "8C TS KC 9H 4S 7D 2S 5D 3S AC",
  "5C AD 5D AC 9C 7C 5H 8D TD KS",
  "3H 7H 6S KC JS QH TD JC 2D 8S",
  "TH 8H 5C QS TC 9H 4D JC KS JS",
  "7C 5H KC QH JD AS KH 4C AD 4S",
];


pokerHands(testArr);
