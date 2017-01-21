# Webdriver.io Testable Example

An example [Webdriver.io test runner configuration](http://webdriver.io/guide/testrunner/configurationfile.html) and test spec that is compatible with [Testable](https://testable.io).

See the [Testable Webdriver.io guide](https://testable.io/documentation/selenium/overview.html) for more details.

### Screenshots and Output Files

Any file written to the directory indicated by the `OUTPUT_DIR` environment variable will be captured as part of your [Testable](https://testable.io) test results.

For example (if run locally it will write to the current directory):

```javascript
browser.saveScreenshot((process.env.OUTPUT_DIR || '.') + '/snapshot.png');
```

### Testable Parameters

If your [Testable scenario is parameterized](https://testable.io/documentation/selenium/overview.html) they are accessible as environment variables.

For example, the `TestVar` parameter is accessible as `process.env.PARAM_TESTVAR`.

### Capturing Assertions

Testable will capture all assertions during your test and report them as metrics `wdioPassed`, `wdioFailed`, `wdioSkipped`. Check out the [custom dashboard documentation](https://testable.io/documentation/guides/customize-dashboard.html) for a guide on how to add these metrics to your test results dashboard.

### Metrics, Timings, Logging, CSVs, and more

See the [testable-utils](https://github.com/testable/node-script-utils) package for more details on the following features:

* [Custom Metrics](https://github.com/testable/node-script-utils#custom-metrics)
* [Stopwatch](https://github.com/testable/node-script-utils#stopwatch)
* [Logging](https://github.com/testable/node-script-utils#logging)
* [CSV](https://github.com/testable/node-script-utils#csv)
* [Execution Info](https://github.com/testable/node-script-utils#execution-info)
* [Webdriver.io Custom Commands](https://github.com/testable/node-script-utils#webdriverio-commands)
