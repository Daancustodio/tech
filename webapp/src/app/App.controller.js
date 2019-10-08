

sap.ui.define(
	[
		"TechSite/src/app/BaseController",
		"sap/m/MessageToast",
		"TechSite/model/RestModel",
		"TechSite/model/formatter"
	],
	function (BaseController, MessageToast, RestModel, formatter) {
	"use strict";

	return BaseController.extend("TechSite.src.app.App", {
		fmt:formatter,
		_toolPage:{},
		onInit : function(){
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this._toolPage = this.byId("tooApplPage");
			this
            .getRouter()
            .attachRouteMatched(this.onAfterLoginMatch, this);
			this
            .getRouter()
            .getRoute('login')
            .attachPatternMatched(this.beforeLogin, this);
		},
		beforeLogin(oEvent){
			this.destroyNavigation();
		},
		onAfterLoginMatch(oEvent){
			let route = oEvent.getParameter("name");
			if(route != "login")
				this.createNavigation();
		},

		onLoginPopOver : function(oEvent){
			if(!this.getUserSession()){
				MessageToast.show(this.getText("Commom.NoLoggedUser"));
				this.getRouter().navTo('login');
			}
			else
				this.loggedPopOver(oEvent);
		},

		onLogOut : function (){
			this.destroyUserSession();
			this.getRouter().navTo("login");
			location.reload()
		},

		loggedPopOver : function(oEvent){

			if (!this._oPopoverLogged) {
			    this._oPopoverLogged = sap.ui.xmlfragment("TechSite.src.pages.security.Logged", this);
			    this.getView().addDependent(this._oPopoverLogged);
			}
			let model = new RestModel();
			model.setData(this.getUserSession())
			this._oPopoverLogged.setModel(model);
			var oButton = oEvent.getSource();
			jQuery.sap.delayedCall(0, this, function () {
			    this._oPopoverLogged.openBy(oButton);
			});
		},

		createNavigation(){
			let toogleButton = this.byId("sideNavigationToggleButton");
			if(toogleButton.getEnabled()) return;

			var model = new RestModel();
			model.get(this.getServerUrl("AppModel.json"))
			.then(
				(data)=>{
						toogleButton.setEnabled(true)
						const translateTitle = data => {
							data.title = this.getText(data.title);
						}

						data.navigation.forEach(translateTitle);
						data.fixedNavigation.forEach(translateTitle);
						data.headerItems.forEach(translateTitle);

						model.setData(data);
				}
				).catch(err =>{
					this.showExeption(err)
				})

			this._toolPage.setModel(model)
		},

		destroyNavigation(){
			this.byId("sideNavigationToggleButton").setEnabled(false);
			this._toolPage.setModel(new RestModel());
		},

		onSideNavButtonPress : function() {
			var sideExpanded = this._toolPage.getSideExpanded();
			this._toolPage.setSideExpanded(!sideExpanded);
		},
		onNavRoute:function(oEvent){
			var item = oEvent.getParameter('item');
			let key = item.getKey();
			this._toolPage.setSideExpanded(false);
            this.getRouter().navTo(key);
		},
	});
});
