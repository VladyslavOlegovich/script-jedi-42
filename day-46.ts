// https://www.codewars.com/kata/590b85b745eaa415e10000b1
declare const ICuboid: {
    new (length: number): ICuboid;
  }
  
  interface ICuboid {
    length: number;
    surfaceArea: number;
    volume: number;
  }
  
  export class Cube implements ICuboid {
    constructor(public length:number) {
      this.length = length;
    }
    get surfaceArea():number {
      return 6 * this.length * this.length;
    }
    set surfaceArea(surfaceArea:number) {
      this.length = Math.sqrt(surfaceArea / 6);
    }
    get volume():number{
      return this.length * this.length * this.length;
    }
    set volume(volume:number) {
      this.length = Math.pow(volume, 1/3);
    }
  }


  // https://www.codewars.com/kata/591445324670baed3200008d
  // :(
