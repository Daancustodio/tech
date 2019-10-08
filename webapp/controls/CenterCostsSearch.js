sap.ui.define([
    "sap/m/SearchField",
    "TechSite/model/formatter"
], function (SearchField, formatter) {
	"use strict";
	return SearchField.extend("TechSite.controls.CenterCostsSearch", {
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
