function ucfirst(e){return e?e[0].toUpperCase()+e.substr(1):e}var Alloy=require("alloy"),widgets={};module.exports=function(e){var t=this;return widgets[e]?widgets[e]:(this.widgetId=e,this.Collections={},this.Models={},this.Shared={},this.createController=function(t,r){return new(require("alloy/widgets/"+e+"/controllers/"+t))(r)},this.createCollection=function(t,r){return new(require("alloy/widgets/"+e+"/models/"+ucfirst(t)).Collection)(r)},this.createModel=function(t,r){return new(require("alloy/widgets/"+e+"/models/"+ucfirst(t)).Model)(r)},this.createWidget=Alloy.createWidget,this.Collections.instance=function(e){return t.Collections[e]||(t.Collections[e]=t.createCollection(e))},this.Models.instance=function(e){return t.Models[e]||(t.Models[e]=t.createModel(e))},void(widgets[e]=this))};