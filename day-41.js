// https://www.codewars.com/kata/567ed5db4089538eea000010/train/javascript
function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => launchMissile(i), i * 1000);
  }
}

// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
// :(
