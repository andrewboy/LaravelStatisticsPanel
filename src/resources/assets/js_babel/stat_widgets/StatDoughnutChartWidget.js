class StatDoughnutChartWidget extends DoughnutChartWidget {
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