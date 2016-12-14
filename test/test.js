
describe('inject into object', function () {
  var inj = {};

  beforeEach(inject(injectInto([
    '$rootScope',
    '$http',
    '$location'
  ], inj)));

  it('injects', function () {
    console.log(inj);
    expect(inj.$rootScope).toBeDefined();
    expect(inj.$http).toBeDefined();
    expect(inj.$location).toBeDefined();
  });
});

describe('inject into function', function () {
  var inj = {};

  beforeEach(inject(injectInto([
    '$rootScope',
    '$http',
    '$location'
  ], function (obj) {
    inj = obj;
  })));

  it('injects', function () {
    console.log(inj);
    expect(inj.$rootScope).toBeDefined();
    expect(inj.$http).toBeDefined();
    expect(inj.$location).toBeDefined();
  });
});
