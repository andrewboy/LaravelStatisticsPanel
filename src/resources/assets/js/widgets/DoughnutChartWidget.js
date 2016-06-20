function DoughnutChartWidget(id, colors, options) {
    this.chart = null;
    this.options = options;
    this.colors = colors;

    ChartWidget.apply(this, Array.prototype.slice.call(arguments));
}

DoughnutChartWidget.prototype = new ChartWidget();

DoughnutChartWidget.prototype.getLegend = function () {
    return $('.chart-legend', this.id);
};

DoughnutChartWidget.prototype.setLegend = function (data) {
    var legend = '', i, max;

    for (i = 0, max = data.length; i < max; i += 1) {
        legend += '<li><i class="fa fa-circle-o text-' + this.colors[i].color_name + '"></i> ' + data[i].label + '</li>';
    }

    return legend;
};

DoughnutChartWidget.prototype.colorize = function (data) {
    var i, max;

    if (data) {
        for (i = 0, max = data.length; i < max; i += 1) {
            data[i].color = this.colors[i].color;
            data[i].highlight = this.colors[i].highlight;
        }
    }

    return data;
};

DoughnutChartWidget.prototype.setDiagram = function (data) {
    if (this.chart !== null) {
        this.chart.destroy();
    }
    if (data && 0 !== data.length) {
        $('.chart-item', this.id).removeClass('hidden');
        $('.no-data', this.id).addClass('hidden');

        var chart = new Chart(this.getDiagram()[0].getContext("2d"));
        this.chart = chart.Doughnut(this.colorize(data), this.getOptions());
        this.getLegend().html(this.setLegend(data));
    } else {
        $('.chart-item', this.id).addClass('hidden');
        $('.no-data', this.id).removeClass('hidden');
    }

};