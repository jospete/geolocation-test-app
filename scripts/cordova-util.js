const { execSync } = require('child_process');

const run = (cmd) => {
	console.log('> ' + cmd);
	return execSync(cmd, { stdio: 'inherit' });
};

module.exports.run = run;

const cordovaCommand = (cmd) => run('cordova ' + cmd);
module.exports.cordovaCommand = cordovaCommand;

const pluginCommand = (cmd) => cordovaCommand('plugin ' + cmd);
module.exports.pluginCommand = pluginCommand;

const pluginAdd = (cmd) => pluginCommand('add ' + cmd);
module.exports.pluginAdd = pluginAdd;

const pluginRemove = (cmd) => pluginCommand('remove ' + cmd);
module.exports.pluginRemove = pluginRemove;