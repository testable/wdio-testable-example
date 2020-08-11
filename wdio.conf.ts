exports.config = {
  specs: [
    "test/spec/**"
  ],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  logLevel: "warn",
  coloredLogs: true,
  framework: "mocha",
  waitforTimeout: 15000,
  mochaOpts: {
    ui: "bdd",
    timeout: 15000,
    require: 'ts-node/register',
    compilers: [
      // optional
      'tsconfig-paths/register'
    ]
  },
  before: () => {
    const ta = require('testable-utils');
  }
};
