class ChartWidget extends Widget {
    constructor(id, colors, options) {
        super(id);
        this.colors = colors;
        this.options = options;
    }

    getDiagram() {
        return $('.diagram', this.id);
    }

    getChart() {
        return this.chart;
    }

    set options(options) {
        this.options = options;
    }

    get options() {
        return this.options;
    }

    set colors(colors) {
        this.colors = colors;
    }

    get colors() {
        return this.colors;
    }
}