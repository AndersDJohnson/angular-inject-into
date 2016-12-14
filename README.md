# angular-inject-into

Angular injection into an object. DRY and minification-safe.
E.g. to simplify `angular.mock.inject` `beforeEach` assignment boilerplate in Jasmine tests.

You can now do this:
```js
describe('test', function () {
  var inj = {};

  beforeEach(inject(injectInto(['$rootScope', '$http', '$location'], inj)));

  it('inject', function () {
    expect(inj.$rootScope).toBeDefined();
    expect(inj.$http).toBeDefined();
    expect(inj.$location).toBeDefined();
  });
});
```
Instead of this:
```js
describe('test', function () {
  var $rootScope;
  var $http;
  var $location;

  beforeEach(inject(function (_$rootScope_, $_http_, $_location_) {
    $rootScope = _$rootScope_;
    $http = _$http_;
    $location = $_location_;
  }));

  it('inject', function () {
    expect($rootScope).toBeDefined();
    expect($http).toBeDefined();
    expect($location).toBeDefined();
  });
});
```
