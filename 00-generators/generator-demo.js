function* gen() {
  console.log(1);
  console.log(2);
}
const g = gen();
const res = g.next(); // 1 2
console.log(res.value, res.done); // undefined true
// ===================================================
function* gen(i) {
  yield i;
  yield i + 10;
}
const g = gen(5);
const res = g.next(); // 
console.log(res.value, res.done); // 5 false
g.next(); // 
console.log(res.value, res.done); // 15 false
g.next(); // 
console.log(res.value, res.done); // undefined true
// ===================================================
function* gen(i) {
  yield i;
  yield i + 10;
  return 25;
}
const g = gen(5);
const res = g.next(); // 
console.log(res.value, res.done); // 5 false
g.next(); // 
console.log(res.value, res.done); // 15 false
g.next(); // 
console.log(res.value, res.done); // 25 true // 25 is returned value