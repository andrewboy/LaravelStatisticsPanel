class StatBarChartWidget extends window.statistics_panel.widgets.bar_chart {
    constructor(id) {
        super(id);
        this.id = id;
    }

    init() {

    }

    update(data) {
        this.setDiagram(data);
    }
}