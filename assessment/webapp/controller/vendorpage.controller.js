sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";

    return BaseController.extend("assessment.controller.vendorpage",{
        onInit() {
            sap.ui.core.UIComponent.getRouterFor(this).getRoute("vendorpage").attachPatternMatched(this._objPatternMatched,this);
          },
            _objPatternMatched:function(evt)
            {
                var materialId = evt.getParameter("arguments").materialId;
                 var material = this.getView().getModel().oData
                    for (let i= 0; i < material.length; i++) {
                            if(material[i].materialId == materialId){
                                 var getVendors = material[i].vendors
                            }
                     
                    };
                    var vendorDetailModel = new sap.ui.model.json.JSONModel(getVendors)
                    this.getView().setModel(vendorDetailModel,"vendorDetailModel");
     
               
            },

    onNavigationBack : function(){
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("RouteBasicView");
    }

});
});
