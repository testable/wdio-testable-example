exports.config = {
  specs: [
    "test/spec/**"
  ],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  loglevel: "command",
  coloredLogs: true,
  framework: "mocha",
  waitforTimeout: 40000,
  mochaOpts: {
    ui: "bdd",
    timeout: 40000
  }
};
