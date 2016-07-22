class StatMapToplistWidget extends MapToplistWidget {
    constructor(id) {
        super(
            id,
            window.statistics_panel.config.chart_options.toplist.colors
        );
    }

    init() {}

    update(data) {
        this.setMultiMap(data);
    }
}