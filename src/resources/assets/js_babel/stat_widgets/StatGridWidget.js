class StatGridWidget extends GridWidget {
    constructor(id) {
        super(id);
    }

    init() {}

    update(data) {
        this.setGrid(data);
    }
}