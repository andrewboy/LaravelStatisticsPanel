window.statistics_panel = {};

window.statistics_panel.widgets = (function () {
    function Widget(id, colors, options) {
        "use strict";
    
        this.id = id;
        //this.colors = colors;
        //this.options = options;
    }
    
    Widget.prototype.setTitle = function(titleTxt) {
        this.getTitle().html(titleTxt);
    };
    
    Widget.prototype.getTitle = function() {
        return $('.title', this.id);
    };
    
    Widget.prototype.getFooter = function() {
        return $('.footer', this.id);
    };
    
    Widget.prototype.getLoadIcon = function() {
        return $('.overlay', this.id);
    };
    
    Widget.prototype.setLoadIcon = function(isVisible) {
        if (isVisible) {
            this.getLoadIcon().removeClass('hide');
        } else {
            this.getLoadIcon().addClass('hide');
        }
    };
    
    Widget.prototype.getType = function () {
        return $(this.id).data('type');
    };
    
    Widget.prototype.setFooter = function (footerTxt) {
        this.getFooter().html(footerTxt);
    };
    
    function ChartWidget(id, colors, options) {
        Widget.apply(this, Array.prototype.slice.call(arguments));
    
        this.chart;
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
    function GridWidget(id) {
        Widget.apply(this, Array.prototype.slice.call(arguments));
    }
    
    GridWidget.prototype = new Widget();
    
    GridWidget.prototype.getGridBody = function () {
        return $('.box-body', this.id);
    };
    
    GridWidget.prototype.setGrid = function (data) {
        var gridBodyHtml = '', i, maxRow, j, maxHeadLen, k, maxBodyLen, c, maxCol;
    
        gridBodyHtml += '<div class="row">';
    
        if (data.datasets) {
            for (i = 0, maxRow = data.datasets.length; i < maxRow; i += 1) {
                gridBodyHtml += '<div class="col-md-' +  (12 / data.datasets.length) + '">'+
                    '<table class="table no-margin table-striped table-hover table-bordered">';
    
                //HEAD
                gridBodyHtml += '<thead><tr>';
                for (j = 0, maxHeadLen = data.labels.length; j < maxHeadLen; j += 1) {
                    gridBodyHtml += '<th>' + data.labels[j] + '</th>';
                }
                gridBodyHtml += '</tr></thead>';
    
                //BODY
                gridBodyHtml += '<tbody>';
                for (k = 0, maxBodyLen = data.datasets[i].length; k < maxBodyLen; k += 1) {
                    gridBodyHtml += '<tr>';
                    for (c = 0, maxCol = maxHeadLen; c < maxCol; c += 1) {
                        gridBodyHtml += '<td>' + data.datasets[i][k][c] + '</td>';
                    }
                    gridBodyHtml += '</tr>';
                }
                gridBodyHtml += '</tbody>';
    
                gridBodyHtml += '</table></div>';
            }
        } else {
            gridBodyHtml += '<div class="col-md-12 text-center margin">No data to display</div>';
        }
    
        gridBodyHtml += '</div>';
    
        this.getGridBody().html(gridBodyHtml);
    };
    function BoxWidget() {
        Widget.apply(this, Array.prototype.slice.call(arguments));
    }
    
    BoxWidget.prototype = new Widget();
    
    BoxWidget.prototype.getValue = function() {
        return $('.value', this.id);
    };
    
    BoxWidget.prototype.setValue = function(value) {
        this.getValue().html(value);
    };
    function DoughnutChartWidget(id, colors, options) {
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
    function GoalCompletionWidget(id) {
        BoxWidget.apply(this, Array.prototype.slice.call(arguments));
    }
    
    GoalCompletionWidget.prototype = new BoxWidget();
    
    GoalCompletionWidget.prototype.setDescription = function (description) {
        $('.progress-description', this.id).text(description);
    };
    
    GoalCompletionWidget.prototype.setPercent = function (percent) {
        $('.progress-bar', this.id).css('width', percent + '%');
    };
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
    function ToplistWidget(id, colors) {
        Widget.apply(this, Array.prototype.slice.call(arguments));
        this.colors = colors;
    }
    
    ToplistWidget.prototype = new Widget();
    
    ToplistWidget.prototype.getGridBody = function () {
        return $('.box-body', this.id);
    };
    
    ToplistWidget.prototype.setGrid = function (data) {
        var gridBodyHtml = '', i, maxRow, j, maxCol;
    
        gridBodyHtml += '<div class="row">';
    
        if (data.datasets) {
            for (i = 0, maxRow = data.datasets.length; i < maxRow; i += 1) {
                gridBodyHtml += '<div class="col-md-' +  (12 / data.datasets.length) + '"><div class="progress-group">';
    
                for (j = 0, maxCol = data.datasets[i].length; j < maxCol; j += 1) {
                    gridBodyHtml += '<span class="progress-text">' + data.datasets[i][j][0] + '</span>' +
                        '<span class="progress-number"><b>' + data.datasets[i][j][1] + '</b></span>' +
    
                        '<div class="progress sm">' +
                        '<div class="progress-bar bg-' + this.colors[j].color_name + '" style="width: ' +
                        (100 * (data.datasets[i][j][1] / data.datasets[i][0][1])) + '%"></div>' +
                        '</div>';
                }
    
                gridBodyHtml += '</div></div>';
            }
        } else {
            gridBodyHtml += '<div class="col-md-12 text-center margin">No data to display</div>';
        }
    
        gridBodyHtml += '</div>';
    
        this.getGridBody().html(gridBodyHtml);
    };
    function MapToplist(id, options) {
        GridWidget.apply(this, Array.prototype.slice.call(arguments));
    
        this.markerClusterer = null;
        var settings = $.extend({}, {}, options || {});
    
        var mapStyle = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
    
        var mapOptions = {
            zoom: 6,
            center: new google.maps.LatLng(47.5011151657, 19.0531965145),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: mapStyle
        };
        this.map = new google.maps.Map($('.map', this.id)[0], mapOptions);
    }
    
    MapToplist.prototype = new GridWidget();
    
    MapToplist.prototype.getGridBody = function () {
        return $('.toplist', this.id);
    };
    
    MapToplist.prototype.setMultiMap = function (data) {
        var i,
            max,
            markers = [];
    
        if (this.markerClusterer) {
            this.markerClusterer.clearMarkers();
        }
    
        if (data.map) {
            for (i = 0, max = data.map.length; i < max; i += 1) {
                var latLng = new google.maps.LatLng(data.map[i].lat, data.map[i].lng);
                var marker = new google.maps.Marker({
                    position: latLng,
                    title: data.map[i].name +': '+ data.map[i].value,
                });
    
                markers.push(marker);
            }
    
            this.markerClusterer = new MarkerClusterer(this.map, markers);
    
            this.markerClusterer.setCalculator(function(markers, numStyles) {
                var val = 0,
                    index = 0,
                    dv;
    
                for (var m = 0, max = markers.length; m < max; m++) {
                    val += Number(markers[m].getTitle().match(/(\d+)$/g)[0]);
                }
    
                dv = val;
    
                while (dv !== 0) {
                    dv = parseInt(dv / 10, 10);
                    index++;
                }
    
                index = Math.min(index, numStyles);
    
                return {
                    text: val,
                    index: index
                };
            });
        }
    
        if (data.toplist) {
            this.setGrid(data.toplist);
        }
    };
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

    return {
        Widget: Widget,
        ChartWidget: ChartWidget,
        GridWidget: GridWidget,
        BoxWidget: BoxWidget,
        DoughnutChartWidget: DoughnutChartWidget,
        GoalCompletionWidget: GoalCompletionWidget,
        LineChartWidget: LineChartWidget,
        ToplistWidget: ToplistWidget,
        MapToplist: MapToplist,
        BarChartWidget: BarChartWidget,
    };
}());

//window.statistics_panel.widgets.extend = function (modules) {
//    $.extend(statistics_panel.widgets, modules);
//};

window.statistics_panel.boxes = (function () {
    function StatisticsBox(context, source) {
        this.context = context;
        this.source = source;
    }
    
    StatisticsBox.prototype.init = function () {
        var obj = this;
        $('.stat-widget', this.context).each(function (i, item) {
            obj.setWidget($(item));
        });
    
        this.boot();
    };
    
    StatisticsBox.prototype.boot = function () {
        $('.stat-widget', this.context).each(function (i, item) {
            $(item).data('widget').setLoadIcon(true);
        });
    
        this.fetchDatas();
    };
    
    StatisticsBox.prototype.updateWidgets = function (data) {
        var id,
            statWidgets = $('.stat-widget', this.context);
    
        for (id in data) {
            var $stat = statWidgets.filter('[data-stat-id="' + id + '"]');
    
            if ($stat.length > 0) {
                $stat.data('widget').update(data[id]);
                $stat.data('widget').setLoadIcon(false);
            }
        }
    };
    
    StatisticsBox.prototype.setWidget = function ($item) {
        var id = $item.data('statId');
    
        var widget = new window.statistics_panel.stat_widgets[$item.data('type')]($item);
        widget.init($item);
    
        $item.data('widget', widget);
    };
    
    StatisticsBox.prototype.fetchDatas = function () {
        var self = this;
        $.ajax({
            type: 'GET',
            url: self.source
        }).done(function (data) {
            self.updateWidgets(data);
        });
    };
    function TimeIndependentBox(context, source) {
        this.context = context;
        this.source = source;
    }
    
    TimeIndependentBox.prototype.init = function () {
        var obj = this;
        $('.stat-widget', this.context).each(function (i, item) {
            obj.setWidget($(item));
        });
    
        this.boot();
    };
    
    TimeIndependentBox.prototype.boot = function () {
        $('.stat-widget', this.context).each(function (i, item) {
            $(item).data('widget').setLoadIcon(true);
        });
    
        this.fetchDatas();
    };
    
    TimeIndependentBox.prototype.updateWidgets = function (data) {
        var id,
            statWidgets = $('.stat-widget', this.context);
    
        for (id in data) {
            var $stat = statWidgets.filter('[data-stat-id="' + id + '"]');
    
            if ($stat.length > 0) {
                $stat.data('widget').update(data[id]);
                $stat.data('widget').setLoadIcon(false);
            }
        }
    };
    
    TimeIndependentBox.prototype.setWidget = function ($item) {
        var id = $item.data('statId');
    
        var widget = new window.statistics_panel.stat_widgets[$item.data('type')]($item);
        widget.init($item);
    
        $item.data('widget', widget);
    };
    
    TimeIndependentBox.prototype.fetchDatas = function () {
        var self = this;
        $.ajax({
            type: 'GET',
            url: self.source
        }).done(function (data) {
            self.updateWidgets(data);
        });
    };
    function MonthlyBox(context, source) {
        this.context = context;
        this.source = source;
    
        StatisticsBox.apply(this, Array.prototype.slice.call(arguments));
    }
    
    MonthlyBox.prototype = new StatisticsBox();
    
    StatisticsBox.prototype.fetchDatas = function () {
        //var self = this;
        //$.ajax({
        //    type: 'GET',
        //    url: self.source
        //}).done(function (data) {
        //    self.updateWidgets(data);
        //});
    
        var self = this;
    
        $('input.stat_interval', this.context).datepicker({
            format: "yyyy/mm",
            startView: "months",
            minViewMode: "months",
            autoclose: true
        }).on('changeDate', function () {
            self.onDateChange();
        });
    
        $('input.stat_interval', this.context).first().trigger('changeDate');
    };

    return {
        StatisticsBox: StatisticsBox,
        TimeIndependentBox: TimeIndependentBox,
        MonthlyBox: MonthlyBox,
    };
}());

window.statistics_panel.stat_widgets = (function () {
    function StatGoalCompletionWidget (id) {
        this.id = id;
    
        window.statistics_panel.widgets.GoalCompletionWidget.apply(this, Array.prototype.slice.call(arguments));
    }
    
    StatGoalCompletionWidget.prototype = new  window.statistics_panel.widgets.GoalCompletionWidget();
    
    StatGoalCompletionWidget.prototype.init = function () {
    
    };
    
    StatGoalCompletionWidget.prototype.update = function (data) {
        this.setPercent(data.percent);
        this.setDescription(data.description);
        this.setValue(data.reached);
    };

    return {
        StatGoalCompletionWidget: StatGoalCompletionWidget,
    };
}());