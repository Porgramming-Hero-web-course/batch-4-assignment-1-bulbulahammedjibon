{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type Shape = Circle | rectangle;

  function calculateShapeArea(input: Shape): number {
    if (input.shape === "circle") {
      const circleShape = Math.PI * Math.pow(input.radius, 2);

      return parseFloat(circleShape.toFixed(2));
    } else if (input.shape === "rectangle") {
      const rectangleShape = input.height * input.width;
      return rectangleShape;
    }
    return -1;
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);
}
