function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){function t(){o.__views.home.removeEventListener("open",t),o.__views.home.activity||(Ti.API.warn("You attempted to access an Activity on a lightweight Window or other"),Ti.API.warn("UI component which does not have an Android activity. Android Activities"),Ti.API.warn("are valid with only windows in TabGroups or heavyweight Windows."))}function e(){o.__views.home.removeEventListener("open",e),o.__views.home.activity?o.__views.home.activity.onCreateOptionsMenu=function(t){var e={title:"Settings",icon:"/images/overflow.png",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM,id:"__alloyId4"};o.__views.__alloyId4=t.menu.add(_.pick(e,Alloy.Android.menuItemCreateArgs)),o.__views.__alloyId4.applyProperties(_.omit(e,Alloy.Android.menuItemCreateArgs)),i?o.__views.__alloyId4.addEventListener("click",i):s["$.__views.__alloyId4!click!clickedSettings"]=!0}:(Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window"),Ti.API.warn("or other UI component which does not have an Android activity."),Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows."))}function i(){var t=Alloy.createController("settings"),e=t.getView();Alloy.Globals.navgroup?Alloy.Globals.navgroup.openWindow(e):e.open()}function r(){Alloy.createController("contact").getView()}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="home",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var o=this,n={},s={};o.__views.home=Ti.UI.createWindow({backgroundColor:"#222222",id:"home"}),o.__views.home&&o.addTopLevelView(o.__views.home),o.__views.home.addEventListener("open",t),o.__views.home.addEventListener("open",e),o.__views.go=Ti.UI.createImageView({top:"15%",id:"go",image:"/images/goteam.png"}),o.__views.home.add(o.__views.go),o.__views.cobButton=Ti.UI.createButton({width:65,height:65,top:"50%",left:"10%",backgroundImage:"/images/browser.png",id:"cobButton"}),o.__views.home.add(o.__views.cobButton),o.__views.calendarButton=Ti.UI.createButton({width:65,height:65,top:"50%",backgroundImage:"/images/calendar.png",id:"calendarButton"}),o.__views.home.add(o.__views.calendarButton),o.__views.contactButton=Ti.UI.createButton({width:65,height:65,top:"50%",right:"10%",backgroundImage:"/images/contact.png",id:"contactButton"}),o.__views.home.add(o.__views.contactButton),r?o.__views.contactButton.addEventListener("click",r):s["$.__views.contactButton!click!contactUs"]=!0,o.__views.facebookButton=Ti.UI.createButton({width:65,height:65,top:"75%",left:"25%",backgroundImage:"/images/facebook.png",id:"facebookButton"}),o.__views.home.add(o.__views.facebookButton),o.__views.youtubeButton=Ti.UI.createButton({width:65,height:65,top:"75%",right:"25%",backgroundImage:"/images/youtube.png",id:"youtubeButton"}),o.__views.home.add(o.__views.youtubeButton),n.destroy=function(){},_.extend(o,o.__views),arguments[0]||{},o.cobButton.addEventListener("click",function(){Ti.Platform.openURL("http://www.wtamu.edu/academics/college-business.aspx")}),o.calendarButton.addEventListener("click",function(){var t="com.google.android.calendar",e="com.android.calendar.LaunchActivity",i=Ti.Android.ACTION_VIEW,r=Ti.Platform.model;if(-1!=r.indexOf("HTC")||-1!=r.indexOf("htc"))t="com.htc.calendar",e="com.htc.calendar.MonthActivity",i=Ti.Android.ACTION_MAIN;else{var o=parseFloat(Ti.Platform.version);2.4>o&&(t="com.android.calendar")}var n=Ti.Android.createIntent({action:i,packageName:t,className:e});Ti.Android.currentActivity.startActivity(n)}),o.facebookButton.addEventListener("click",function(){Ti.Platform.openURL("http://www.facebook.com/WTAMUCOB")}),o.youtubeButton.addEventListener("click",function(){Ti.Platform.openURL("https://www.youtube.com/channel/UCENCoEEcsLJvyWaMjonwFuQ")}),o.home.open(),s["$.__views.__alloyId4!click!clickedSettings"]&&o.__views.__alloyId4.addEventListener("click",i),s["$.__views.contactButton!click!contactUs"]&&o.__views.contactButton.addEventListener("click",r),_.extend(o,n)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;