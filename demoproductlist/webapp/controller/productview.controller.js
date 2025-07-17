sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demo.ladera.demoproductlist.controller.productview", {
        onInit() {
            var productsModel = new sap.ui.model.json.JSONModel("model/Product.json");
            this.getView().setModel(productsModel);
            if(!this.addProduct){
                this.addProduct = new sap.ui.xmlfragment("demo.ladera.demoproductlist.view.addproduct",this);
                this.getView().addDependent(this.addProduct);
                }
        },
        onSearchProducts : function(evt){
          var productsearch = evt.getParameter("newValue")
          var filters=new sap.ui.model.Filter("ProductName","Contains",productsearch);
 
          this.getView().byId("Product").getBinding("items").filter(filters);
        },

        SearchOnEnter : function(evt){
            var productsearch = evt.getParameter("value")
            var filters=new sap.ui.model.Filter("ProductName","Contains",productsearch);
   
            this.getView().byId("Product").getBinding("items").filter(filters);

        },

        onSortPress:function(evt){
            this._sortDescending = !this._sortDescending;
            var oSorter = new sap.ui.model.Sorter("ProductName", this._sortDescending);
            this.getView().byId("Product").getBinding("items").sort(oSorter);
        },

        onaddproduct:function(){
            this.mode="ADD";
            var newProductObj = {
                "ProductId": this.getView().getModel().oData.Products.length + 1,
                "ProductName": "",
                "ProductDescription": "",
                "Location": "",
                "CostCenter": "",
                "Status":"Inactive"
            };
            var productObj = new sap.ui.model.json.JSONModel(newProductObj);
            this.getView().setModel(productObj,"productObj");
            this.addProduct.open();
        },
        OnSave:function(){
        if(this.mode == "ADD"){
            this.getView().getModel().oData.Products.push(this.getView().getModel("productObj").oData);
            sap.m.MessageToast.show("New Product is added");
        }
        else{
            sap.m.MessageToast.show("Product is Updated");
        }
            this.getView().getModel().updateBindings(true);
            this.addProduct.close();
        },

        oneditproduct : function(){
            this.mode="EDIT";
            if(!this.getView().byId("Product").getSelectedItem()){
                sap.m.MessageToast.show("Please select an item to edit!");
                return;
            }
            var editProductObj = this.getView().byId("Product").getSelectedItem().getBindingContext().getObject();
            var productObj = new sap.ui.model.json.JSONModel(editProductObj);
            this.getView().setModel(productObj,"productObj");
            this.addProduct.open();
        },

        OnCancel:function(){
            this.addProduct.close();
            this.getView().setModel(productsModel,"productsModel");
        },
        ondeleteproduct:function(evt){
            var selectedTableRow = evt.getSource().getBindingContext().getPath().split("/")[2];
            this.getView().getModel().oData.Products.splice(selectedTableRow,1);
            this.getView().getModel().updateBindings(true);
            },

       onProductRowPress:function(evt){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("productDetail",{
                "productIndex" : evt.getSource().getBindingContext().getPath().split("/")[2]
            });
        }
        
    });
});