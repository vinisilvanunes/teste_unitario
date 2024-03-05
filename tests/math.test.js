const math = require('../math');

test('2 + 3 = 5', ()=>{
  expect(math.add(2,3)).toBe(5);
});

test('500 + 500 = 1000', ()=>{
  expect(math.add(500, 500)).toBe(100)
});

test('250 + 750 = 1000', ()=>{
  expect(math.add(250, 750)).toBe(1000);
});

test('45 + 65 = 110', ()=>{
  expect(math.add(45,65)).toBe(110);
});

test('2 - 3 = -1', ()=>{
  expect(math.subtract(2,3)).toBe(-1);
});

test('5 - 4 = 1', ()=>{
  expect(math.subtract(5,4)).toBe(1);
});

test('20 - 15 = 5', ()=>{
  expect(math.subtract(20,15)).toBe(5);
});

test('10 - 7 = 3', ()=>{
  expect(math.subtract(10,7)).toBe(3);
});

test('12 * 12 = 144', ()=>{
  expect(math.multiply(12,12)).toBe(144);
});

test('3 * 9 = 27', ()=>{
  expect(math.multiply(3,9)).toBe(27);
});

test('5 * 8 = 40', ()=>{
  expect(math.multiply(5,8)).toBe(40);
});

test('1 * 3 = 2', ()=>{
  expect(math.multiply(1,3)).toBe(3);
});

test('1 / 2 = 0.5', ()=>{
  expect(math.divide(1,2)).toBe(0.5);
});

test('4 / 2 = 2', ()=>{
  expect(math.divide(4,2)).toBe(2);
});

test('9 / 9 = 1', ()=>{
  expect(math.divide(9,9)).toBe(1);
});

test('1 / 4  = 0.25', ()=>{
  expect(math.divide(1,4)).toBe(0.25);
});
