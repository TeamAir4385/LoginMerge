function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function initializePushNotifications(_user) {
        Alloy.Globals.pushToken = null;
        var pushLib = require("pushNotifications");
        pushLib.initialize(_user, function(_pushData) {
            Ti.API.info("I GOT A PUSH NOTIFICATION");
            var payload;
            try {
                payload = _pushData.payload ? JSON.parse(_pushData.payload) : _pushData;
            } catch (e) {
                payload = {};
            }
            Ti.UI.createAlertDialog({
                title: payload.android.title || "Alert",
                message: payload.android.alert || "",
                buttonNames: [ "Ok" ]
            }).show();
        }, function(_pushInitData) {
            if (_pushInitData.success) {
                Alloy.Globals.pushToken = _pushInitData.data.deviceToken;
                Ti.API.debug("Success: Initializing Push Notifications " + JSON.stringify(_pushInitData));
            } else {
                alert("Error Initializing Push Notifications");
                Alloy.Globals.pushToken = null;
            }
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
    $.__views.home = Alloy.createController("home", {
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.getView().open();
    $.loginSuccessAction = function(_options) {
        initializePushNotifications(_options.model);
        Ti.API.info("logged in user information");
        Ti.API.info(JSON.stringify(_options.model, null, 2));
        $.tabGroup.open();
        $.tabGroup.setActiveTab(0);
        $.feedController.initialize();
        Alloy.Globals.currentUser = _options.model;
        $.feedController.parentController = $;
        $.friendsController.parentController = $;
        $.settingsController.parentController = $;
        $.loginController && $.loginController.close();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;