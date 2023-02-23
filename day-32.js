// http://www.codewars.com/kata/this-is-a-problem
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName;
  return this.name;
}

// https://www.codewars.com/kata/this-is-an-other-problem
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    set: function (name) {
      name = name.split(' ');
      if (name.length === 2) {
        this.firstName = name[0];
        this.lastName = name[1];
      }
    },
  });
}
