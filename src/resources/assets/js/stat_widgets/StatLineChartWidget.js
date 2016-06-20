function StatLineChartWidget(id) {
    this.id = id;

    window.statistics_panel.widgets.line_chart.apply(
        this, [
            id,
            window.statistics_panel.config.chart_options.line.colors,
            window.statistics_panel.config.chart_options.line.options,
        ]
    );
}

StatLineChartWidget.prototype = new window.statistics_panel.widgets.line_chart();

StatLineChartWidget.prototype.init = function () {

};

StatLineChartWidget.prototype.update = function (data) {
    this.setDiagram(data);
};