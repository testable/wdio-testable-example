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
  waitforTimeout: 60000,
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
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
