// https://www.codewars.com/kata/basic-subclasses-adam-and-eve/
class God {
  static create() {
    const adam = new Man();
    const eva = new Woman();
    return [adam, eva];
  }
}
class Human {}
class Man extends Human {}
class Woman extends Human {}

// https://www.codewars.com/kata/56ff9b53140fcca90b000530/
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', 4, true, master);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.master = master;
  }
}

// https://www.codewars.com/kata/55a144eff5124e546400005a
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = `${this.name}s age is ${this.age}`;
  }
  getInfo() {
    return this.info;
  }
}
