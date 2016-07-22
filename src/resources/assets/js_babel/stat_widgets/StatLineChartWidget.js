class StatLineChartWidget extends LineChartWidget {
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