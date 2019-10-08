sap.ui.define(
	[
		"TechSite/src/app/BaseController",
		"sap/m/MessageToast",
		'TechSite/model/RestModel'	,

	],
	function (BaseController, MessageToast, RestModel) {
	"use strict";

	return BaseController.extend("TechSite.src.pages.user.User", {

		onInit : function () {
			console.log("Inicializado")	;
		},




	});

});
