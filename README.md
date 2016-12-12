# Webdriver.io Testable Example

An example [Webdriver.io test runner configuration](http://webdriver.io/guide/testrunner/configurationfile.html) and test spec that is compatible with [Testable](https://testable.io).

See the [Testable Webdriver.io guide](https://testable.io/documentation/selenium/overview.html) for more details.

### Capabilities

Each capability in your configuration file must have a proxy specified. See the example configuration file which has the following:

```javascript
{
  "browserName": "chrome",
  "maxInstances": 1,
  "acceptSslCerts": true,
  "proxy": {
    "proxyType": process.env.PROXY ? "manual" : "direct",
    "httpProxy": process.env.PROXY,
    "sslProxy": process.env.PROXY
  }
}
```

### Screenshots and Output Files

Any file written to the directory indicated by the `OUTPUT_DIR` environment variable will be captured as part of your [Testable](https://testable.io) test results.

For example:

```javascript
browser.saveScreenshot(process.env.OUTPUT_DIR + '/snapshot.png');
```

### Testable Parameters

If your [Testable scenario is parameterized](https://testable.io/documentation/selenium/overview.html) they are accessible as environment variables.

For example, the `TestVar` parameter is accessible as `process.env.PARAMS_TESTVAR`.

### Capturing Assertions

To capture the pass/fail counts for assertions during your test simply add the following to your configuration file:

```javascript
{
	reporters: ['json'],
	reporterOptions: {
    	outputDir: (process.env.OUTPUT_DIR || ".") + "/automation-test-results"
  	}
}
```

Testable will read the JSON output after wdio finishes and capture the number of assertions that passed as `wdioPass` and the failures as `wdioFail`.