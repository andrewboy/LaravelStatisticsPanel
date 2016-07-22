class StatGridWidget extends window.statistics_panel.widgets.grid {
    constructor(id) {
        super(id);
    }

    init() {}

    update(data) {
        this.setGrid(data);
    }
}