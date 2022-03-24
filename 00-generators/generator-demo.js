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
// ===================================================
// ===================================================
function* expandSpan(xStart, xLen, yStart, yLen) {
    const xEnd = xStart + xLen;
    const yEnd = yStart + yLen;
    for (let x = xStart; x < xEnd; ++x) {
        for (let y = yStart; y < yEnd; ++y) {
            yield {x, y};
        }
    }
}
// the same w/ usual function
function expandSpan(xStart, xLen, yStart, yLen) {
    const temp = [];
    const xEnd = xStart + xLen;
    const yEnd = yStart + yLen;
    for (let x = xStart; x < xEnd; ++x) {
        for (let y = yStart; y < yEnd; ++y) {
            temp.push({x, y});
        }
    }
    return temp;
}
// ===================================================
// ===================================================
function* expandRanges(ranges) {
    for (const range of ranges) {
        for (const item of expandRange(range)) {
            yield item;
        }
    }
}
// yield* - Yeild delegation 
function* expandRanges(ranges) {
    for (const range of ranges) {
        yield* expandRange(range);
    }
}