/*global QUnit*/

sap.ui.define([
	"assessment/controller/BasicView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BasicView Controller");

	QUnit.test("I should test the BasicView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
