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
  mochaOpts: {
    ui: "bdd"
  }
};
