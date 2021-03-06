const plist = require("simple-plist");

function updateConfig(config) {
  const filePath = `${process.env.HOME}/Library/Preferences/com.amethyst.Amethyst.plist`;

  const data = plist.readFileSync(filePath);

  const newSettings = { ...data };

  Object.entries(config).forEach(([key, value]) => {
    newSettings[key] = value;
  });

  plist.writeFileSync(filePath, newSettings);

  return newSettings;
};

module.exports = updateConfig;
