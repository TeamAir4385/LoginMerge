function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId2() {
        $.__views.home.removeEventListener("open", __alloyId2);
        if ($.__views.home.activity) ; else {
            Ti.API.warn("You attempted to access an Activity on a lightweight Window or other");
            Ti.API.warn("UI component which does not have an Android activity. Android Activities");
            Ti.API.warn("are valid with only windows in TabGroups or heavyweight Windows.");
        }
    }
    function __alloyId6() {
        $.__views.home.removeEventListener("open", __alloyId6);
        if ($.__views.home.activity) $.__views.home.activity.onCreateOptionsMenu = function(e) {
            var __alloyId5 = {
                title: "Settings",
                icon: "/images/overflow.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
                id: "__alloyId4"
            };
            $.__views.__alloyId4 = e.menu.add(_.pick(__alloyId5, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId4.applyProperties(_.omit(__alloyId5, Alloy.Android.menuItemCreateArgs));
            clickedSettings ? $.__views.__alloyId4.addEventListener("click", clickedSettings) : __defers["$.__views.__alloyId4!click!clickedSettings"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function clickedSettings() {
        var settingsController = Alloy.createController("settings");
        var win = settingsController.getView();
        Alloy.Globals.navgroup ? Alloy.Globals.navgroup.openWindow(win) : win.open();
    }
    function contactUs() {
        Alloy.createController("contact").getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
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
    var __defers = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#222222",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.home.addEventListener("open", __alloyId2);
    $.__views.home.addEventListener("open", __alloyId6);
    $.__views.go = Ti.UI.createImageView({
        top: "15%",
        id: "go",
        image: "/images/goteam.png"
    });
    $.__views.home.add($.__views.go);
    $.__views.cobButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "50%",
        left: "10%",
        backgroundImage: "/images/browser.png",
        id: "cobButton"
    });
    $.__views.home.add($.__views.cobButton);
    $.__views.calendarButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "50%",
        backgroundImage: "/images/calendar.png",
        id: "calendarButton"
    });
    $.__views.home.add($.__views.calendarButton);
    $.__views.contactButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "50%",
        right: "10%",
        backgroundImage: "/images/contact.png",
        id: "contactButton"
    });
    $.__views.home.add($.__views.contactButton);
    contactUs ? $.__views.contactButton.addEventListener("click", contactUs) : __defers["$.__views.contactButton!click!contactUs"] = true;
    $.__views.facebookButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "75%",
        left: "25%",
        backgroundImage: "/images/facebook.png",
        id: "facebookButton"
    });
    $.__views.home.add($.__views.facebookButton);
    $.__views.youtubeButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "75%",
        right: "25%",
        backgroundImage: "/images/youtube.png",
        id: "youtubeButton"
    });
    $.__views.home.add($.__views.youtubeButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.cobButton.addEventListener("click", function() {
        Ti.Platform.openURL("http://www.wtamu.edu/academics/college-business.aspx");
    });
    $.calendarButton.addEventListener("click", function() {
        var packageStr = "com.google.android.calendar";
        var classStr = "com.android.calendar.LaunchActivity";
        var actionStr = Ti.Android.ACTION_VIEW;
        var model = Ti.Platform.model;
        if (-1 != model.indexOf("HTC") || -1 != model.indexOf("htc")) {
            packageStr = "com.htc.calendar";
            classStr = "com.htc.calendar.MonthActivity";
            actionStr = Ti.Android.ACTION_MAIN;
        } else {
            var version = parseFloat(Ti.Platform.version);
            2.4 > version && (packageStr = "com.android.calendar");
        }
        var intent = Ti.Android.createIntent({
            action: actionStr,
            packageName: packageStr,
            className: classStr
        });
        Ti.Android.currentActivity.startActivity(intent);
    });
    $.facebookButton.addEventListener("click", function() {
        Ti.Platform.openURL("http://www.facebook.com/WTAMUCOB");
    });
    $.youtubeButton.addEventListener("click", function() {
        Ti.Platform.openURL("https://www.youtube.com/channel/UCENCoEEcsLJvyWaMjonwFuQ");
    });
    $.home.open();
    __defers["$.__views.__alloyId4!click!clickedSettings"] && $.__views.__alloyId4.addEventListener("click", clickedSettings);
    __defers["$.__views.contactButton!click!contactUs"] && $.__views.contactButton.addEventListener("click", contactUs);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;