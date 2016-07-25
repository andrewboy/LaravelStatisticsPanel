class StatToplistWidget extends window.statistics_panel.widgets.toplist {
    constructor(id) {
        super(
            id,
            window.statistics_panel.config.chart_options.toplist.colors
        );
    }

    init() {}

    update(data) {
        this.setGrid(data);
    }
}