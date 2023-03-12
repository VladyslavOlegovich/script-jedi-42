// https://www.codewars.com/kata/591305520c6f9f5c93000052
interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
  }
  
  export class Square implements IGeometricFigure {
    constructor(private number: number){}
      area() {
      return Math.pow(this.number, 2);
    } 
    perimeter() {
      return this.number * 4;
    }
  }
  
  export class Circle implements IGeometricFigure {
    constructor(private radius:number) {}
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  // https://www.codewars.com/kata/590cb67bc69e3a31d0000042
  // :(
