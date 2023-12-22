# Webdriver.io Testable Example

An example [Webdriver.io test runner configuration](https://webdriver.io/docs/configurationfile.html) and test spec that is compatible with [Testable](https://testable.io).

See the [Testable Webdriver.io guide](https://testable.io/documentation/selenium/overview.html) for more details.

### Testable Parameters

If your [Testable scenario is parameterized](https://testable.io/documentation/selenium/overview.html) they are accessible as environment variables.

For example, the `TestVar` parameter is accessible as `process.env.PARAM_TESTVAR`.

### Capturing Assertions and Tests

Testable will capture all assertions and test steps during your test and report them into your test results.

### Metrics, Timings, Logging, CSVs, and more

See the [testable-utils](https://github.com/testable/node-script-utils) package for more details on the following features:

* [Custom Metrics](https://github.com/testable/node-script-utils#custom-metrics)
* [Stopwatch](https://github.com/testable/node-script-utils#stopwatch)
* [Logging](https://github.com/testable/node-script-utils#logging)
* [CSV](https://github.com/testable/node-script-utils#csv)
* [Execution Info](https://github.com/testable/node-script-utils#execution-info)
* [Webdriver.io Custom Commands](https://github.com/testable/node-script-utils#webdriverio-commands)
