function StatGridWidget(id) {
    this.id = id;

    window.statistics_panel.widgets.grid.apply(this, [id]);
}

StatGridWidget.prototype = new window.statistics_panel.widgets.grid();

StatGridWidget.prototype.init = function () {

};

StatGridWidget.prototype.update = function (data) {
    this.setGrid(data);
};