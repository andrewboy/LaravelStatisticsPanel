function BarChartWidget(id, colors, options) {
    ChartWidget.apply(this, Array.prototype.slice.call(arguments));
}

BarChartWidget.prototype = new ChartWidget();

BarChartWidget.prototype.setDiagram = function (data) {
    if (this.chart !== null) {
        this.chart.destroy();
    }

    var chart = new Chart(this.getDiagram()[0].getContext("2d"));
    //        var ez = 'Bar';
    //        this.chart = chart[ez](ChartHelper.barColorize(data), this.getOptions());
    this.chart = chart.Bar(this.colorize(data), this.getOptions());
};

BarChartWidget.prototype.colorize = function (data) {
    var i, max;

    for (i = 0, max = data.datasets.length; i < max; i += 1) {
        data.datasets[i].fillColor = this.colors[i].fillColor;
        data.datasets[i].strokeColor = this.colors[i].strokeColor;
        data.datasets[i].pointColor = this.colors[i].pointColor;
    }

    return data;
};