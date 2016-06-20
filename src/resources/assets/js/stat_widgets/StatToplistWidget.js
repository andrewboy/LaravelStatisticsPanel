function StatToplistWidget(id) {
    this.id = id;

    window.statistics_panel.widgets.ToplistWidget.apply(this, [id, window.statistics_panel.chart_options.toplist.colors]);
}

StatToplistWidget.prototype = new window.statistics_panel.widgets.ToplistWidget();

StatToplistWidget.prototype.init = function () {

};

StatToplistWidget.prototype.update = function (data) {
    this.setGrid(data);
};