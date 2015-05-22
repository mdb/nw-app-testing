var heading = require('heading.js');

describe('heading module', function () {
  describe('#getHeading', function () {
    it('returns the heading text', function () {
      expect(heading.getHeading()).toEqual('Hello World');
    });
  });
});
