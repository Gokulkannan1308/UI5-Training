sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
 
    return BaseController.extend("demo.ladera.demoproductlist.controller.productDetail", {
        onInit() {

          var productsModel = new sap.ui.model.json.JSONModel("model/Product.json");
          this.getView().setModel(productsModel);
          sap.ui.core.UIComponent.getRouterFor(this).getRoute("productDetail").attachPatternMatched(this._objPatternMatched,this);
        },

        _objPatternMatched:function(oEvent){
          var passedProductIndex = oEvent.getParameter("arguments").productIndex;          ;
          var productDetailModel = new sap.ui.model.json.JSONModel(this.getView().getModel().oData.Products[passedProductIndex]);
          this.getView().setModel(productDetailModel,"productDetailModel");
        },

        onNavigationBack : function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Routeproductview");
        }
    });
  });