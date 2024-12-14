function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; //This is changed to return 0 instead of the original 0
  } else if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return a + b;
  }
}

console.log(foo(0,0)); //This will return 0
console.log(foo(1,0)); //This will return 1
console.log(foo(0,1)); //This will return 1
console.log(foo(1,1)); //This will return 2