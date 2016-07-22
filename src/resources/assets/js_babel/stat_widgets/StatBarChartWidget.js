class StatBarChartWidget extends window.statistics_panel.widgets.bar_chart {
    constructor(id) {
        super(
            id,
            window.statistics_panel.config.chart_options.bar.colors,
            window.statistics_panel.config.chart_options.bar.options
        );
    }

    init() {

    }

    update(data) {
        this.setDiagram(data);
    }
}