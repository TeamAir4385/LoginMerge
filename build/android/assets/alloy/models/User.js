var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{adapter:{type:"acs",collection_name:"users"}},extendModel:function(e){return _.extend(e.prototype,{login:function(e,t,i){this.config.Cloud.Users.login({login:e,password:t},function(e){if(e.success){var t=e.users[0];Ti.App.Properties.setString("sessionId",e.meta.session_id),Ti.App.Properties.setString("user",JSON.stringify(t)),i&&i({success:!0,model:new model(t)})}else Ti.API.error(e),i&&i({success:!1,model:null,error:e})})}}),e},extendCollection:function(e){return _.extend(e.prototype,{}),e}},model=Alloy.M("user",exports.definition,[]),collection=Alloy.C("user",exports.definition,model),exports.Model=model,exports.Collection=collection;