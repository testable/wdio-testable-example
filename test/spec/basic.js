var assert = require('assert');

describe('A basic test', function() {
  it('should be possible to go to google', function() {
    browser.url('https://www.google.com');
    browser.testableScreenshot('HomePage');
    var title = browser.getTitle();
    assert.equal(title, 'Google');
  });
});
