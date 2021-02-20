const { pluginAdd, pluginRemove } = require('./cordova-util');

pluginRemove('cordova-plugin-geolocation-tests');
pluginRemove('cordova-plugin-geolocation');
pluginAdd('../cordova-plugin-geolocation');
pluginAdd('./plugins/cordova-plugin-geolocation/tests');