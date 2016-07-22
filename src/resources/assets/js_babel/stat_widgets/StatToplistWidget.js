class StatToplistWidget extends ToplistWidget {
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