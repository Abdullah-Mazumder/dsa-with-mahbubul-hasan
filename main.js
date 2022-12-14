{
  //   get distance beetwen two points in 2d plane

  const getDistanceFromTwoPointsIn2DPlane = (x1, x2, y1, y2) => {
    const resultOne = Math.pow(x1 - y1, 2) + Math.pow(x2 - y2, 2);
    let result = Math.sqrt(resultOne);

    if (result.toString().indexOf(".") >= 0) {
      return result.toFixed(2) + " unit";
    }

    return result + " unit";
  };

  // console.log(getDistanceFromTwoPointsIn2DPlane(1, 26, 3, 44));
}

{
  // get three angle from three sides of a triangle

  const getSquareValue = (n) => {
    return Math.pow(n, 2);
  };

  const getAngleFromTwoSides = (n1, n2, n3) => {
    return (
      (
        Math.acos(
          (getSquareValue(n1) + getSquareValue(n2) - getSquareValue(n3)) /
            (2 * n1 * n2)
        ) *
        (180 / Math.PI)
      ).toFixed(4) + " degree"
    );
  };

  const getAnglesOfTriangle = (a, b, c) => {
    const angleOne = getAngleFromTwoSides(b, c, a);

    const angleTwo = getAngleFromTwoSides(a, c, b);

    const angleThree = getAngleFromTwoSides(a, b, c);

    return { angleOne, angleTwo, angleThree };
  };

  //   console.log(getAnglesOfTriangle(5, 6, 8));
}

{
  // get area of a triangle from three sides

  const getBoundaryOfTriangle = (a, b, c) => {
    const boundary = (a + b + c) / 2;
    return (
      Math.sqrt(
        boundary * (boundary - a) * (boundary - b) * (boundary - c)
      ).toFixed(2) + " square unit"
    );
  };

  //   console.log(getBoundaryOfTriangle(5, 6, 7));
}

{
  // get boundary of a circle

  const getBoundaryOfCircle = (r) => {
    return (2 * Math.PI * r).toFixed(2) + " unit";
  };

  // console.log(getBoundaryOfCircle(3));
}

{
  // get area of a triangle from three points

  const getAreaOfTriangleFromThreePoints = (x1, y1, x2, y2, x3, y3) => {
    return (
      Math.abs((1 / 2) * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))) +
      " square unit"
    );

    // const a = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    // const b = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    // const c = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));

    // const boundary = (a + b + c) / 2;
    // const result = Math.sqrt(
    //   boundary * (boundary - a) * (boundary - b) * (boundary - c)
    // );
    // return result.toFixed(2) + " square unit";
  };

  // console.log(getAreaOfTriangleFromThreePoints(10, 25, 33, 34, 57, 60));
}

{
  // get max number from array

  const findMaxValueFromArray = (numbers) => {
    let max = -Infinity;
    numbers.forEach((number) => {
      if (number > max) {
        max = number;
      }
    });
    return max;
  };

  const numbers = [1, 3, 88, 3, 89];
  // console.log(findMaxValueFromArray(numbers));
}

// {
//   // get position in quardrant from a points

//   const getPositionInQuardrantFromAPoints = (x, y) => {
//     if (x === 0 && y === 0) {
//       return `the position of (${x}, ${y}) is MAIN POINT.`;
//     }

//     if (x >= 0 && y > 0) {
//       return `the position of (${x}, ${y}) is in FIRST QUARDRANT.`;
//     }

//     if (x < 0 && y >= 0) {
//       return `the position of (${x}, ${y}) is in SECOND QUARDRANT.`;
//     }

//     if ((x <= 0 && y < 0) || (x < 0 && y <= 0)) {
//       return `the position of (${x}, ${y}) is in THIRD QUARDRANT.`;
//     }

//     if (x > 0 && y <= 0) {
//       return `the position of (${x}, ${y}) is in FOURTH QUARDRANT.`;
//     }
//   };

//   // console.log(getPositionInQuardrantFromAPoints(0, 0));
// }

// {
//   // 1 + 2 + 3 + .... + n

//   const sum = (n) => {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//       result += i;
//     }
//     return result;
//   };

//   // console.log(sum(456654));
// }

// {
//   // 1^2 + 2^2 + 3^2 + .... + n^2

//   const sum = (n) => {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//       result += Math.pow(i, 2);
//     }
//     return result;
//   };

//   console.log(sum(364546));
// }

// {
//   // 1^1 + 2^2 + 3^3 + .... + n^n

//   const sum = (n) => {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//       result += Math.pow(i, i);
//     }
//     return result;
//   };

//   console.log(sum(38));
// }

// {
//   // check a number prime or not prime

//   const primeOrNotPrime = (n) => {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return `${n} is not a prime number`;
//       }
//     }

//     return `${n} is a prime number`;
//   };

//   console.log(primeOrNotPrime(19));
// }

// {
//   // get factorial of a number

//   const factorial = (n) => {
//     if (n === 0) {
//       return 1;
//     }

//     if (n === -1) {
//       return -1;
//     }

//     const number = Math.abs(n);
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//       result *= i;
//     }

//     if (n < -1) {
//       return result - 2 * result;
//     }

//     return result;
//   };
//   console.log(factorial(6));

//   // get nPr || nCr

//   const nCr = (n, r) => {
//     if (n < r) {
//       return "MATH ERROR";
//     }
//     return factorial(n) / (factorial(r) * factorial(n - r));
//   };

//   console.log(nCr(12, 10));

//   const nPr = (n, r) => {
//     if (n < r) {
//       return "MATH ERROR";
//     }
//     return factorial(n) / factorial(n - r);
//   };

//   console.log(nPr(10, 9));
// }

{
  // convert a number from decimal to binary

  const decimalToBinary = (n) => {
    return (n >>> 0).toString(2);
  };

  // console.log(decimalToBinary(2));
}

{
  // given a array with binary digits. convert it into a decimal

  const array = [0, 1, 1, 0, 0, 1, 0, 0, 1, 1];

  const toDecimal = (arr) => {
    let number = "";

    arr.forEach((n) => {
      number += n;
    });

    number = parseInt(number, 2);

    return number;
  };

  // console.log(toDecimal(array));
}

{
  // sort a array

  const array = [4, 99, 45, 88, 23, 45, 87, 134, 84983, 4533, 764];

  const ascending = (arr) => {
    return arr.sort((n1, n2) => {
      return n1 - n2;
    });
  };

  const descending = (arr) => {
    return arr.sort((n1, n2) => {
      return n2 - n1;
    });
  };

  // console.log(ascending(array));
  // console.log(descending(array));
}

{
  // there are many 1 and 0 in an array. How many 1's in a row do you have to say?

  const array = [1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1];

  const maxOneInARow = (arr) => {
    const str = array.join("");
    const strArray = str.split("0");
    let maxOneLength = 0;

    strArray.forEach((item) => {
      if (item.length > maxOneLength) {
        maxOneLength = item.length;
      }
    });

    return maxOneLength;
  };

  // console.log(maxOneInARow(array));
}

{
  const array = [1, 0, 10, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1];

  const sum = (arr, a, b) => {
    let result = 0;
    for (let i = a - 1; i <= b - 1; i++) {
      result += arr[i];
    }

    return result;
  };

  // console.log(sum(array, 2, 7));
}

{
  // count small letter number and capital letter number from a word

  // const word = "BaNgLaDeSh is AweSOME";
  const word = "is";

  const totalSmallOrCapitalLetter = (word) => {
    let totalSmallLetter = 0;
    let totalCapitalLetter = 0;

    for (let letter of word) {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        totalCapitalLetter++;
      } else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
        totalSmallLetter++;
      }
    }

    return { totalSmallLetter, totalCapitalLetter };
  };

  // console.log(totalSmallOrCapitalLetter(word));
}

{
  // get total words number from a sentace
  const sentace = "islam is  my,   life. i always love Allah   and    Mohammad";

  const getTotalWordsNumber = (sentace) => {
    const sentaceArray = sentace.split(/[ . ,]+/);
    return sentaceArray.length;
  };

  // console.log(getTotalWordsNumber(sentace));
}

{
  // get day, month, year from a sprcified date format

  const date = "21/9/2013";
  const dateFormattor = (date) => {
    const dateArray = date.split("/");
    const [day, month, year] = dateArray;
    return { day, month, year };
  };
  // console.log(dateFormattor(date));
}
