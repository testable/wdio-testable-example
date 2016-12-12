var assert = require('assert');

describe('A basic test', function() {
  it('should be possible to go to google', function() {
    browser.url('https://dev.testable.io:8092/stocks/IBM');
    browser.saveScreenshot(process.env.OUTPUT_DIR + '/snapshot-' + Date.now() + '.png');
    var title = browser.getTitle();
    assert.equal(title, 'Google');
  });
});
