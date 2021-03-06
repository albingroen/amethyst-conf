const updateConfig = require("./util/update-config");
const argv = require('minimist')(process.argv.slice(2));

function cli() {
  delete argv._
  return updateConfig(argv)
}

cli()
