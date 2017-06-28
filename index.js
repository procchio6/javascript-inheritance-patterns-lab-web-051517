function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
  return `(${this.x}, ${this.y})`
};

function Shape() {
}

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y)
};

Shape.prototype.move = function (x, y) {
  this.position = new Point(x, y)
};

function Circle(radius) {
  this.radius = radius
  this.diameter = () => radius * 2
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function () {
  return Math.PI * Math.pow(this.radius, 2)
};

Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.radius
};

function Side(length) {
  this.length = length
}

function Polygon(sides) {
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function () {
  return this.sides.reduce(function (sum, side) {
    return sum += side.length
  }, 0)
};

Polygon.prototype.numberOfSides = function () {
  return this.sides.length
};

function Quadrilateral(side1, side2, side3, side4) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]

}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(side1, side2, side3) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3)]
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle(width, height) {
  this.width = width
  this.height = height
  Quadrilateral.call(this, width, width, height, height)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function () {
  return this.width * this.height
};

function Square(length) {
  this.length = length
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function () {
  let properties = ""
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      properties += ` ${prop}`
    }
  }
  return properties
};
