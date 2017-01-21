exports.config = {
  specs: [
    "test/spec/**"
  ],
  capabilities: [
    {
      browserName: "firefox"
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
