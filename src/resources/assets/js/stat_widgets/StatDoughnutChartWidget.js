function StatDoughnutChartWidget(id) {
    this.id = id;

    window.statistics_panel.widgets.DoughnutChartWidget.apply(
        this, [
            id,
            window.statistics_panel.config.chart_options.pie.colors,
            window.statistics_panel.config.chart_options.pie.options
        ]
    );
}

StatDoughnutChartWidget.prototype = new window.statistics_panel.widgets.DoughnutChartWidget();

StatDoughnutChartWidget.prototype.init = function () {

};

StatDoughnutChartWidget.prototype.update = function (data) {
    this.setDiagram(data);
};