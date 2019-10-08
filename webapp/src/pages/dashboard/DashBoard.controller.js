sap.ui.define(
	[
		"InventSite/src/app/BaseController",
		"sap/m/MessageToast",
		'InventSite/model/RestModel',

	],
	function (BaseController, MessageToast, RestModel) {
	"use strict";

	return BaseController.extend("InventSite.src.pages.dashboard.DashBoard", {

		onInit : function () {
			
		},

		onAfterRendering(){
			const page = this.byId('dash');
			page.scrollTo(0,150);			
			const control = this.byId("imageLogo").$();			
			control.animate({opacity: 0.25, marginTop: '150px'},1000,
			()=> { control.animate({opacity:1, marginTop: '0px'}, 1500) });			
			
		},
	});

});
