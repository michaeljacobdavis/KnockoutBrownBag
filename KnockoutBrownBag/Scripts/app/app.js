// Model
var Person = function (first, last) {
    var self = this;
    self.first = ko.observable(first);
    self.last = ko.observable(last);
    self.fullName = ko.computed(function () {
        if (!self.first() || !self.last()) return null;
        return self.first() + ' ' + self.last();
    });
};

var ViewModel = function () {
    var self = this;
    self.first = ko.observable();
    self.last = ko.observable();

    self.contacts = ko.observableArray([
        new Person('Mike', 'Davis')
    ]);
};

ViewModel.prototype.add = function () {
    // Validate
    if (!this.first() || !this.last()) return;
    // Create new person
    this.contacts.push(new Person(this.first(), this.last()));
    // Clean ViewModel
    this.first(null);
    this.last(null);
};