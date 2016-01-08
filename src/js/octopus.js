'use strict';
// Viewmodel
function AppViewModel() {
	// Knockout tutorial: observable
	this.firstName = ko.observable('Bert');
	this.lastName = ko.observable('Bertington');

	// Knockout tutorial: computed values
	this.fullName = ko.computed(function() {
		return this.firstName() + ' ' + this.lastName();
	}, this);

	// Knockout tutorial: additional functionality to VM
	this.capitalizeLastName = function() {
		var currentVal = this.lastName();
		this.lastName(currentVal.toUpperCase());
	};
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
