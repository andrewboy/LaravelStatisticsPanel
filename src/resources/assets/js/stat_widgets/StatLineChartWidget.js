function StatLineChartWidget(id) {
    this.id = id;

    window.statistics_panel.widgets.LineChartWidget.apply(
        this, [
            id,
            window.statistics_panel.config.chart_options.line.colors,
            window.statistics_panel.config.chart_options.line.options,
        ]
    );
}

StatLineChartWidget.prototype = new window.statistics_panel.widgets.LineChartWidget();

StatLineChartWidget.prototype.init = function () {

};

StatLineChartWidget.prototype.update = function (data) {
    this.setDiagram(data);
};