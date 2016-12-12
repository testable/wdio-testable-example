var assert = require('assert');

describe('A basic test', function() {
  it('should be possible to go to google', function() {
    browser.url('https://www.google.com');
    browser.saveScreenshot(process.env.OUTPUT_DIR + '/snapshot-' + Date.now() + '.png');
    var title = browser.getTitle();
    assert.equal(title, 'Google');
  });
});
