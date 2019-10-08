sap.ui.define([
    "sap/m/SearchField",
    "InventSite/model/formatter"
], function (SearchField, formatter) {
	"use strict";
	return SearchField.extend("InventSite.controls.CenterCostsSearch", {
		metadata : {
            properties : {
				dimension: 	{type : "int", defaultValue :-1}
			}
        },

		init : function () {

        },
        renderer : {}
	});
});
