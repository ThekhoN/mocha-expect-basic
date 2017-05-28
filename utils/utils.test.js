const expect = require('expect');
const utils = require('./utils');

it('adds two numbers', () => {
  const res = utils.add(2,2);
  expect(res).toBeA('number').toBe(4);
});

it('async adds two numbers', (done) => {
  utils.asyncAdd(2, 2, (res) => {
    expect(res).toBeA('number').toBe(4);
    done();
  });
});
