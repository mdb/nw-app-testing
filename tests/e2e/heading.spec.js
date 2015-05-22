describe('the page heading', function () {
  it('reads "Hello World"', function () {
    expect(element(by.id('heading')).getText()).toEqual('Hello World');
  });
});
