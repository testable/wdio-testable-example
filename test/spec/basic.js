const assert = require('assert');

describe('A basic test', function() {
  it('should be possible to go to google', async function() {
    await browser.url('https://www.google.com');
    await browser.saveScreenshot('HomePage.png');
    const title = await browser.getTitle();
    assert.equal(title, 'Google');
  });
});
