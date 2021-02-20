const { pluginAdd, pluginRemove } = require('./cordova-util');

pluginRemove('cordova-plugin-geolocation-tests --nosave');
pluginRemove('cordova-plugin-geolocation --nosave');
pluginAdd('../cordova-plugin-geolocation --nosave');
pluginAdd('./plugins/cordova-plugin-geolocation/tests --nosave');