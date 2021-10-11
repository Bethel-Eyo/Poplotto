/* LOTTERY RULES
1. If sum == 2    €10
2. if all values are the same   €5
3. if 2nd and 3rd values are different from 1st value   €1
4. else €0*/
export const calculateSingleWin = (data: Array<number>) => {
  let win = 0;
  let sum = calculateSum(data); // returns sum of all entries.
  let sameValues = areAllValuesSame(data); // if all values are the same return true
  let differsFirst = differFromFirst(data); // if 2nd and 3rd differs from first return true;
  if (sum === 2) {
    win = 10;
  } else if (sameValues) {
    win = 5;
  } else if (differsFirst) {
    win = 1;
  }

  return win;
};

const calculateSum = (data: Array<number>) => {
  let sum = 0;
  data.forEach((entry: number) => {
    sum = sum + entry;
  });

  return sum;
};

const areAllValuesSame = (data: Array<number>) => {
  let value = data[0];
  let count = 0;
  data.forEach((entry: number) => {
    if (entry !== value) {
      count++;
    }
  });

  if (count === 0) {
    return true;
  } else {
    return false;
  }
};

const differFromFirst = (data: Array<number>) => {
  let first = data[0];
  let count = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] === first) {
      count++;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
};
