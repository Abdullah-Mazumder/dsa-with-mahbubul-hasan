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

  console.log(getDistanceFromTwoPointsIn2DPlane(1, 26, 3, 44));
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

  console.log(getBoundaryOfCircle(3));
}

{
  // get area of a triangle from three points
}
