function BoxWidget() {
    Widget.apply(this, Array.prototype.slice.call(arguments));
}

BoxWidget.prototype = new Widget();

BoxWidget.prototype.getValue = function() {
    return $('.value', this.id);
};

BoxWidget.prototype.setValue = function(value) {
    this.getValue().html(value);
};