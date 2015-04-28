function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function deviceTokenSuccess(e) {
        alert("please work" + e.deviceToken);
        deviceToken = e.deviceToken;
        subscribeToChannel(deviceToken);
    }
    function deviceTokenError(e) {
        alert("Failed to register for push notifications! " + e.error);
    }
    function subscribeToChannel(deviceToken) {
        Cloud.PushNotifications.subscribeToken({
            device_token: deviceToken,
            channel: "news_alerts",
            type: "android"
        }, function(e) {
            alert(e.success ? "Subscribed" : "Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Hello",
        id: "__alloyId7"
    });
    $.__views.index.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var CloudPush = require("ti.cloudpush");
    var Cloud = require("ti.cloud");
    var deviceToken = null;
    CloudPush.retrieveDeviceToken({
        success: deviceTokenSuccess,
        error: deviceTokenError
    });
    CloudPush.addEventListener("callback", function(evt) {
        alert("Notification received: " + evt.payload);
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;