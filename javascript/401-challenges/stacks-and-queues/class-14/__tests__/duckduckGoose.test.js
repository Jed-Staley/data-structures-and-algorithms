
const duckDuckGoose = require('../index');

describe('function', () => {
  it('Can successfully return the right string', () => {
    expect(duckDuckGoose(['a','b','c','d','e'], 3)).toEqual('d');
  });
});
