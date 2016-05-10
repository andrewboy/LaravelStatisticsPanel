function LineChartWidget(id, colors, options) {
    ChartWidget.apply(this, Array.prototype.slice.call(arguments));
}

LineChartWidget.prototype = new ChartWidget();

LineChartWidget.prototype.setDiagram = function (data) {
    if (this.chart !== null) {
        this.chart.destroy();
    }

    if (data && 0 !== data.length) {
        $('.chart-item', this.id).removeClass('hidden');
        $('.no-data', this.id).addClass('hidden');

        var chart = new Chart(this.getDiagram()[0].getContext("2d"));
        this.chart = chart.Line(this.colorize(data), this.getOptions());
    } else {
        $('.chart-item', this.id).addClass('hidden');
        $('.no-data', this.id).removeClass('hidden');
    }
};

LineChartWidget.prototype.colorize = function (data) {
    var i, max;
    for (i = 0, max = data.datasets.length; i < max; i += 1) {
        data.datasets[i].fillColor = this.colors[i].fillColor;
        data.datasets[i].strokeColor = this.colors[i].strokeColor;
        data.datasets[i].pointColor = this.colors[i].pointColor;
        data.datasets[i].pointStrokeColor = this.colors[i].pointStrokeColor;
        data.datasets[i].pointHighlightFill = this.colors[i].pointHighlightFill;
        data.datasets[i].pointHighlightStroke = this.colors[i].pointHighlightStroke;
    }

    return data;
};