/*global QUnit*/

sap.ui.define([
	"demo/ladera/demoproductlist/controller/productview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("productview Controller");

	QUnit.test("I should test the productview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
