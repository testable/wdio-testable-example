import logger from '@wdio/logger';
import * as assert from 'assert';
import * as ta from 'testable-utils';


const log = logger('test-basic');

describe('A basic test', () => {

    it('should have the right title', () => {
        browser.url('https://www.google.com');
        let title = browser.getTitle();
        log.warn('check the title'); // just to demonstrate logging in spec file
        browser.testableScreenshot('HomePage');
        // expect(browser).toHaveTitle('Google123');

        browser.testableInfo();
        assert.strictEqual(title, 'Google');
    });

});
