sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("assessment.controller.material", {
        onInit() {
        //  var MaterialModel = new sap.ui.model.json.JSONModel("model/Material.json");
        //  this.getView().setModel(MaterialModel);
        },
        onMaterialClick: function(evt){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("vendorpage",{
                "materialId" : evt.getSource().getBindingContext("material").getProperty().materialId            
            });
        }        
    });
});