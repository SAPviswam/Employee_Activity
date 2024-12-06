sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.app.employeeactivity.controller.Home", {

        // onInit is a lifecycle method called when the view is initialized
        onInit: function () {
            // Initialization logic if needed (e.g., setting up models, etc.)
        },

        onPresspage1btn: function () {
            debugger
            const Pg1 = this.getview();
            const Pg2 = this.getview();
            const Pg3 = this.getview();
            Pg2.byId("detail2").setVisible(true);
            Pg1.byId("detail1").setVisible(false);
            Pg3.byId("detail3").setVisible(false);
            this.getOwnerComponent().getRouter().navTo("detail2");
        },
        // onPressDetailBack: function () {
        //     // This method takes the user back to the previous page
        //     window.history.go(-1);
        // }
    });
});
