/*jslint browser: true*/
/*global jQuery*/
/*global Chart*/
/*global jvm*/
var Widget = (function ($, Chart, jvectormap) {
    "use strict";

    var withWidget = function () {
            this.setTitle = function (titleTxt) {
                this.getTitle().html(titleTxt);
            };

            this.getTitle = function () {
                return $('.title', this.id);
            };

            this.getFooter = function () {
                return $('.footer', this.id);
            };

            this.getLoadIcon = function () {
                return $('.overlay', this.id);
            };

            this.setLoadIcon = function (isVisible) {
                if (isVisible) {
                    this.getLoadIcon().removeClass('hide');
                } else {
                    this.getLoadIcon().addClass('hide');
                }
            };

            this.getType = function () {
                return $(this.id).data('type');
            };

            this.setFooter = function (footerTxt) {
                this.getFooter().html(footerTxt);
            };
        },
        withBox = function () {
            this.getValue = function () {
                return $('.value', this.id);
            };

            this.setValue = function (value) {
                this.getValue().html(value);
            };

            this.setIcon = function () {};

            this.setBgColor = function () {};
        },
        withChartWidget = function () {
            this.getDiagram = function () {
                return $('.diagram', this.id);
            };

            this.getChart = function () {
                return this.chart;
            };

            this.setOptions = function (options) {
                this.options = options;
            };

            this.getOptions = function () {
                return this.options;
            };

            this.setColors = function (colorSettings) {
                this.colors = colorSettings;
            };
        },
        withBarChart = function () {
            this.setDiagram = function (data) {
                if (this.chart !== null) {
                    this.chart.destroy();
                }

                var chart = new Chart(this.getDiagram()[0].getContext("2d"));
        //        var ez = 'Bar';
        //        this.chart = chart[ez](ChartHelper.barColorize(data), this.getOptions());
                this.chart = chart.Bar(this.colorize(data), this.getOptions());
            };

            this.colorize = function (data) {
                var i, max;

                for (i = 0, max = data.datasets.length; i < max; i += 1) {
                    data.datasets[i].fillColor = this.colors[i].fillColor;
                    data.datasets[i].strokeColor = this.colors[i].strokeColor;
                    data.datasets[i].pointColor = this.colors[i].pointColor;
                }

                return data;
            };
        },
        withLineChart = function () {
            this.setDiagram = function (data) {
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

            this.colorize = function (data) {
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
        },
        withGridWidget = function () {
            this.getGridBody = function () {
                return $('.box-body', this.id);
            };

            this.setGrid = function (data) {
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
        },
        withToplistWidget = function () {
            this.getGridBody = function () {
                return $('.box-body', this.id);
            };

            this.setGrid = function (data) {
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
        },
        withDoughnutChartWidget = function () {
            this.getLegend = function () {
                return $('.chart-legend', this.id);
            };

            this.setLegend = function (data) {
                var legend = '', i, max;

                for (i = 0, max = data.length; i < max; i += 1) {
                    legend += '<li><i class="fa fa-circle-o text-' + this.colors[i].color_name + '"></i> ' + data[i].label + '</li>';
                }

                return legend;
            };

            this.colorize = function (data) {
                var i, max;

                if (data) {
                    for (i = 0, max = data.length; i < max; i += 1) {
                        data[i].color = this.colors[i].color;
                        data[i].highlight = this.colors[i].highlight;
                    }
                }

                return data;
            };

            this.setDiagram = function (data) {
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
        },
        withGoalCompletionBox = function () {
            this.setDescription = function (description) {
                $('.progress-description', this.id).text(description);
            };

            this.setPercent = function (percent) {
                $('.progress-bar', this.id).css('width', percent + '%');
            };
        },
        withMapToplist = function () {
            this.getGridBody = function () {
                return $('.toplist', this.id);
            };

            this.setMultiMap = function (data) {
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
        },

        BarChartWidget = function (id, colors, options) {
            this.id = id;
            this.chart = null;
            this.options = options;
            this.colors = colors;
        },
        LineChartWidget = function (id, colors, options) {
            this.id = id;
            this.chart = null;
            this.options = options;
            this.colors = colors;
        },
        GridWidget = function (id) {
            this.id = id;
        },
        ToplistWidget = function (id, colors) {
            this.id = id;
            this.colors = colors;
        },
        DoughnutChartWidget = function (id, colors, options) {
            this.id = id;
            this.chart = null;
            this.options = options;
            this.colors = colors;
        },
        GoalCompletionWidget = function (id) {
            this.id = id;
        },
        BoxWidget = function (id) {
            this.id = id;
        },
        MapToplist = function (id, options) {
            this.id = id;
            this.map = null;
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
        };

    //BarChartWidget
    withWidget.call(BarChartWidget.prototype);
    withChartWidget.call(BarChartWidget.prototype);
    withBarChart.call(BarChartWidget.prototype);

    //ToplistWidget
    withWidget.call(ToplistWidget.prototype);
    withToplistWidget.call(ToplistWidget.prototype);

    //LineChartWidget
    withWidget.call(LineChartWidget.prototype);
    withChartWidget.call(LineChartWidget.prototype);
    withLineChart.call(LineChartWidget.prototype);

    //GridWidget
    withWidget.call(GridWidget.prototype);
    withGridWidget.call(GridWidget.prototype);

    //DoughnutChartWidget
    withWidget.call(DoughnutChartWidget.prototype);
    withChartWidget.call(DoughnutChartWidget.prototype);
    withDoughnutChartWidget.call(DoughnutChartWidget.prototype);

    //GoalCompletionWidget
    withWidget.call(GoalCompletionWidget.prototype);
    withBox.call(GoalCompletionWidget.prototype);
    withGoalCompletionBox.call(GoalCompletionWidget.prototype);

    //BoxWidget
    withWidget.call(BoxWidget.prototype);
    withBox.call(BoxWidget.prototype);

    //MapToplist
    withWidget.call(MapToplist.prototype);
    withGridWidget.call(MapToplist.prototype);
    withMapToplist.call(MapToplist.prototype);

    return {
        'BoxWidget': BoxWidget,
        'BarChartWidget': BarChartWidget,
        'LineChartWidget': LineChartWidget,
        'GridWidget': GridWidget,
        'ToplistWidget': ToplistWidget,
        'DoughnutChartWidget': DoughnutChartWidget,
        'GoalCompletionWidget': GoalCompletionWidget,
        'MapToplist': MapToplist
    };
}(jQuery, Chart, jvm));