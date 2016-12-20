exports.config = {
  specs: [
    "test/spec/**"
  ],
  capabilities: [
    {
      browserName: "firefox",
      maxInstances: 1,
      acceptSslCerts: true,
      proxy: {
        proxyType: process.env.PROXY ? "manual" : "direct",
        httpProxy: process.env.PROXY,
        sslProxy: process.env.PROXY
      }
    }
  ],
  loglevel: "command",
  coloredLogs: true,
  framework: "mocha",
  reporters: [
    "dot", "json"
  ],
  reporterOptions: {
    outputDir: (process.env.OUTPUT_DIR || ".") + "/automation-test-results"
  },
  waitForTimeout: 40000,
  mochaOpts: {
    ui: "bdd",
    timeout: 40000
  }
};
