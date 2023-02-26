// https://www.codewars.com/kata/singleton-pattern/train/javascript
const Singleton = function() {
  if (Singleton.instance) {
    return Singleton.instance;
  }
  Singleton.instance = this;
  return this;
};

// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript
// :(
