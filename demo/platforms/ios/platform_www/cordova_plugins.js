cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-jumio-mobilesdk.JumioMobileSDK",
    "file": "plugins/cordova-plugin-jumio-mobilesdk/www/JumioMobileSDK.js",
    "pluginId": "cordova-plugin-jumio-mobilesdk",
    "clobbers": [
      "Jumio"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-cocoapod-support": "1.3.0",
  "cordova-plugin-jumio-mobilesdk": "2.8.0",
  "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});