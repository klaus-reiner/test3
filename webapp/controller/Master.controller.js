sap.ui.define([
		"sap/ui/core/mvc/Controller"
	], function (Controller) {
	"use strict";
	return Controller.extend("avantum.de.b_ui5_005.controller.Master", {	    
	    onListPress : function(oEvent) {
	    		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	    		var oItem = oEvent.getSource();
	    		oRouter.navTo("detail", {
	    		ID: oItem.getBindingContext().getProperty("ID")
	    		});
////            var sPageId = "detailPage";
//	    	var sPageId = oApp.getPages()[1].getId();
//            oApp.to(sPageId);
//            
//            var oPage = oApp.getPage(sPageId);
//            var oContext = oEvent.getSource().getBindingContext();
//		    oPage.setBindingContext(oContext);
        }
	});
});

// would be possible, but we still have
// global oApp, and who knows for sure
// that we getParent will return sap.m.App
// var oApp = this.ge.tView().getParent();