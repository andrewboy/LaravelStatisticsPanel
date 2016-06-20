function StatToplistWidget(id) {
    this.id = id;

    window.statistics_panel.widgets.ToplistWidget.apply(this, Array.prototype.slice.call(arguments));
}

StatToplistWidget.prototype = new window.statistics_panel.widgets.ToplistWidget();

StatToplistWidget.prototype.init = function () {

};

StatToplistWidget.prototype.update = function (data) {
    this.update(data);
};