// http://www.codewars.com/kata/santaclausable-interface
function isSantaClausable(obj) {
  return (
    typeof obj.sayHoHoHo === 'function' &&
    typeof obj.distributeGifts === 'function' &&
    typeof obj.goDownTheChimney === 'function'
  );
}

// http://www.codewars.com/kata/cylon-evolution
function Cylon(model) {
  this.model = model;
}
Cylon.prototype.attack = function() {
  return 'Destroy all humans!';
};

function HumanSkin(model) {
  Cylon.call(this, model);
  this.model = model;
}
HumanSkin.prototype = Object.create(Cylon.prototype);

HumanSkin.prototype.infiltrate = function() {
  return 'Infiltrate the colonies';
};

// http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function(obj, ...args) {
  return this.apply(obj, args);
};
