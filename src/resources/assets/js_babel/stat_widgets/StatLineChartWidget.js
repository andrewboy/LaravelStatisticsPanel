class StatLineChartWidget extends window.statistics_panel.widgets.line_chart {
    constructor(id) {
        super(
            id,
            window.statistics_panel.config.chart_options.line.colors,
            window.statistics_panel.config.chart_options.line.options
        );
    }

    init() {}

    update(data) {
        this.setDiagram(data);
    }
}