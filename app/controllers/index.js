/* This might need some work. The goal is to tell index to load the actionbar 
 * for Android and load the normal stuff for iOS if that is the platform.
 * Help here would be appreciated. I think this is where it is having an 
 * issue loading for iOS.
 */

if (OS_IOS) {
	Alloy.Globals.navgroup = $.index;
}

if (OS_ANDROID) {
	$.home.getView().open();
} else {
	$.index.open();
}

function initializePushNotifications(_user) {

  Alloy.Globals.pushToken = null;
  var pushLib = require('pushNotifications');

  // initialize PushNotifications
  pushLib.initialize(_user,
  // notification received callback
  function(_pushData) {
    Ti.API.info('I GOT A PUSH NOTIFICATION');
    // get the payload from the proper place depending
    // on what platform you are on
    var payload;

    try {
      if (_pushData.payload) {
        payload = JSON.parse(_pushData.payload);
      } else {
        payload = _pushData;
      }
    } catch(e) {
      payload = {};
    }

    // display the information in an alert
    if (OS_ANDROID) {
      Ti.UI.createAlertDialog({
        title : payload.android.title || "Alert",
        message : payload.android.alert || "",
        buttonNames : ['Ok']
      }).show();
    } else {
      Ti.UI.createAlertDialog({
        title : "Alert",
        message : payload.alert || "",
        buttonNames : ['Ok']
      }).show();
    }

  },
  // registration callback parameter
  function(_pushInitData) {
    if (_pushInitData.success) {
      // save the token so we know it was initialized
      Alloy.Globals.pushToken = _pushInitData.data.deviceToken;

      Ti.API.debug("Success: Initializing Push Notifications " + JSON.stringify(_pushInitData));
    } else {
      alert("Error Initializing Push Notifications");
      Alloy.Globals.pushToken = null;
    }
  });
}




$.loginSuccessAction = function(_options) {

  initializePushNotifications(_options.model);

  Ti.API.info('logged in user information');
  Ti.API.info(JSON.stringify(_options.model, null, 2));

  // open the main screen
  $.tabGroup.open();

  // set tabGroup to initial tab, incase this is coming from
  // a previously logged in state
  $.tabGroup.setActiveTab(0);

  // pre-populate the feed with recent photos
  $.feedController.initialize();

  // get the current user
  Alloy.Globals.currentUser = _options.model;

  // set the parent controller for all of the tabs, give us
  // access to the global tab group and misc functionality
  $.feedController.parentController = $;
  $.friendsController.parentController = $;
  $.settingsController.parentController = $;

  // do any necessary cleanup in login controller
  $.loginController && $.loginController.close();
};

//code runs on Android without this. 