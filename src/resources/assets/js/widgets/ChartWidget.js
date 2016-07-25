class ChartWidget extends Widget {
    constructor(id, colors, options) {
        super(id);
        this.chart = null;
        this.colors = colors;
        this.options = options;
    }

    getDiagram() {
        return $('.diagram', this.id);
    }

    getChart() {
        return this.chart;
    }

    setOptions(options) {
        this.options = options;
    }

    getOptions() {
        return this.options;
    }

    setColors(colors) {
        this.colors = colors;
    }

    getColors() {
        return this.colors;
    }
}