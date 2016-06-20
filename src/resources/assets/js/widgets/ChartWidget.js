function ChartWidget(id, colors, options) {
    Widget.apply(this, Array.prototype.slice.call(arguments));

    this.chart = null;
    this.options = options;
    this.colors = colors;
}

ChartWidget.prototype = new Widget();

ChartWidget.prototype.getDiagram = function () {
    return $('.diagram', this.id);
};

ChartWidget.prototype.getChart = function () {
    return this.chart;
};

ChartWidget.prototype.setOptions = function (options) {
    this.options = options;
};

ChartWidget.prototype.getOptions = function () {
    return this.options;
};

ChartWidget.prototype.setColors = function (colorSettings) {
    this.colors = colorSettings;
};