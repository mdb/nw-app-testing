describe('File Helper Tests', function () {
  var file;

  beforeEach(function () {
    file = require('file.js')
  });

  describe('file#open', function () {
    it('exists', function () {
      expect(file.open).toBeDefined();
    });
  });
});
