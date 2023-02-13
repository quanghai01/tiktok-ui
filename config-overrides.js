const { override, useBabelRc } = require("customize-cra");

// eslint-disable-next-line react-hooks/rules-of-hooks
useBabelRc();

module.exports = override();
