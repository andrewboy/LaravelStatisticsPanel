class StatDoughnutChartWidget extends window.statistics_panel.widgets.doughnut_chart {
    constructor(id){
        super(
            id,
            window.statistics_panel.config.chart_options.pie.colors,
            window.statistics_panel.config.chart_options.pie.options
        );
    }

    init() {

    }

    update(data) {
        this.setDiagram(data);
    }
}