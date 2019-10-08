sap.ui.define(
	[
		"InventSite/src/app/BaseController",
		"sap/m/MessageToast",
		'InventSite/model/RestModel'	,

	],
	function (BaseController, MessageToast, RestModel) {
	"use strict";

	return BaseController.extend("InventSite.src.pages.user.User", {

		onInit : function () {
			console.log("Inicializado")	;
		},




	});

});
