
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("com.app.employeeactivity.controller.Home", {

        // onInit is a lifecycle method called when the view is initialized
        onInit: function () {
            this.page1 = this.byId("page1");
            this.page2 = this.byId("page2");
            // Initialize a local JSON model for form data
            var oFormData = {
                Employee_ID: "",
                Password: "",
                Name: "",
                Job_Title: "",
                Department: "",
                Email: "",
                Phone: "",
                Role: ""
            };

            var oModel = new JSONModel(oFormData);
            this.getView().setModel(oModel, "form");
        },
        onAbout: function () {
            MessageToast.show("You Selected About");
        },
        onSignup: function () {
            this.page1.setVisible(false);// Hide page1
            this.page2.setVisible(true);/// show page2
        },
        onPressBacktopg1: function () {
            this.page1.setVisible(true);/// show page1
            this.page2.setVisible(false);// Hide page2
        },
        
        onPressDeleteEmployee: function () {
            debugger
            var oView = this.getView();
            var oSelectedItems = this.byId("idEmployeeTable").getSelectedItems();

            // Validate the number of selected items
            if (oSelectedItems.length !== 1) {
                MessageToast.show("Please select exactly one Resource");
                return;
            }

            // Get the selected resource object
            var oSelectedResource = oSelectedItems[0].getBindingContext().getObject();
            var sEmployeeId = oSelectedResource.Employee_ID; // Assuming Resourceid is the key

            // Get the OData model
            var oModel = this.getOwnerComponent().getModel("ModelV2");

            // Delete the selected record
            oModel.remove("/Employee('" + sEmployeeId + "')", {
                method: "DELETE",
                success: function () {
                    // Show success message
                    MessageToast.show("Resource deleted successfully");
                    // Optionally, refresh the table or handle UI updates here
                },
                error: function (oError) {
                    // Show error message
                    MessageToast.show("Error deleting resource");
                    console.error("Error deleting resource:", oError);
                }
            });
        },
    });
});
