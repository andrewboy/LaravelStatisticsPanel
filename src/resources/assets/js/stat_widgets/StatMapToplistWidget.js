function StatMapToplistWidget(id) {
    this.id = id;

    window.statistics_panel.widgets.map_toplist.apply(this, [id, window.statistics_panel.config.chart_options.toplist.colors]);
}

StatMapToplistWidget.prototype = new window.statistics_panel.widgets.map_toplist();

StatMapToplistWidget.prototype.init = function () {

};

StatMapToplistWidget.prototype.update = function (data) {
    this.setMultiMap(data);
};