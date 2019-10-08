sap.ui.define(
	[
		"InventSite/src/app/BaseController",
		"sap/m/MessageToast",
		"InventSite/model/RestModel",
	],
	function (BaseController, MessageToast, RestModel) {
	"use strict";

	return BaseController.extend("InventSite.src.pages.security.Login", {
		onInit : function(){

			var that = this;
			this.byId("InventSiteLoginPage").attachBrowserEvent("keypress", oEvent =>{
				if(oEvent.keyCode != jQuery.sap.KeyCodes.ENTER) return;

				that.onLogin();
			});

			this.UserCredentials = {
				UserName: "",
				Password:"",
				grant_type : 'password'
			};
		},


		onLogin : function(oEvent){
			this.UserCredentials.UserName = this.byId("userName").getValue()
			this.UserCredentials.Password = this.byId("userPass").getValue()

			if(!this.UserCredentials.UserName || !this.UserCredentials.Password) {
				MessageToast.show("Infome o usuário e senha");
				return;
			}

			this.setUserSession(this.UserCredentials)
			this.getRouter().navTo("dashBoard")
		},

	});

});
