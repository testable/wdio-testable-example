exports.config = {
  "specs": [
    "test/spec/**"
  ],
  "capabilities": [
    {
      "browserName": "firefox",
      "maxInstances": 1,
      "acceptSslCerts": true,
      "proxy": {
        "proxyType": process.env.PROXY ? "manual" : "direct",
        "httpProxy": process.env.PROXY,
        "sslProxy": process.env.PROXY
      }
    }
  ],
  "loglevel": "command",
  "coloredLogs": true,
  "framework": "mocha",
  "reporters": [ "dot" ],
  "mochaOpts": {
    "ui": "bdd"
  }
};
