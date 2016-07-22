"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.statistics_panel = {};

window.statistics_panel.config = function () {
    var colorPalette = [{
        color_name: 'light-blue',
        color: "#3c8dbc",
        highlight: "#3c8dbc"
    }, {
        color_name: 'gray',
        color: "#d2d6de",
        highlight: "#d2d6de"
    }, {
        color_name: 'green',
        color: "#00a65a",
        highlight: "#00a65a"
    }, {
        color_name: 'yellow',
        color: "#f39c12",
        highlight: "#f39c12"
    }, {
        color_name: 'red',
        color: "#f56954",
        highlight: "#f56954"
    }, {
        color_name: 'aqua',
        color: "#00c0ef",
        highlight: "#00c0ef"
    }, {
        color_name: 'navy',
        color: "#001F3F",
        highlight: "#001F3F"
    }, {
        color_name: 'teal',
        color: "#39CCCC",
        highlight: "#39CCCC"
    }, {
        color_name: 'purple',
        color: "#605ca8",
        highlight: "#605ca8"
    }, {
        color_name: 'orange',
        color: "#ff851b",
        highlight: "#ff851b"
    }, {
        color_name: 'maroon',
        color: "#D81B60",
        highlight: "#D81B60"
    }, {
        color_name: 'black',
        color: "#111111",
        highlight: "#111111"
    }];

    var chartOptions = {
        pie: {
            options: {
                //Boolean - Whether we should show a stroke on each segment
                segmentShowStroke: true,
                //String - The colour of each segment stroke
                segmentStrokeColor: "#fff",
                //Number - The width of each segment stroke
                segmentStrokeWidth: 1,
                //Number - The percentage of the chart that we cut out of the middle
                percentageInnerCutout: 50, // This is 0 for Pie charts
                //Number - Amount of animation steps
                animationSteps: 100,
                //String - Animation easing effect
                animationEasing: "easeOutBounce",
                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate: true,
                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale: false,
                //Boolean - whether to make the chart responsive to window resizing
                responsive: true,
                // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: false,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
                //String - A tooltip template
                tooltipTemplate: "<%=value %>",
                datasetFill: false
            },
            colors: [{
                color: colorPalette[0].color,
                highlight: colorPalette[0].color,
                color_name: colorPalette[0].color_name
            }, {
                color: colorPalette[1].color,
                highlight: colorPalette[1].color,
                color_name: colorPalette[1].color_name
            }, {
                color: colorPalette[2].color,
                highlight: colorPalette[2].color,
                color_name: colorPalette[2].color_name
            }, {
                color: colorPalette[3].color,
                highlight: colorPalette[3].color,
                color_name: colorPalette[3].color_name
            }, {
                color: colorPalette[4].color,
                highlight: colorPalette[4].color,
                color_name: colorPalette[4].color_name
            }, {
                color: colorPalette[5].color,
                highlight: colorPalette[5].color,
                color_name: colorPalette[5].color_name
            }, {
                color: colorPalette[6].color,
                highlight: colorPalette[6].color,
                color_name: colorPalette[6].color_name
            }, {
                color: colorPalette[7].color,
                highlight: colorPalette[7].color,
                color_name: colorPalette[7].color_name
            }, {
                color: colorPalette[8].color,
                highlight: colorPalette[8].color,
                color_name: colorPalette[8].color_name
            }, {
                color: colorPalette[9].color,
                highlight: colorPalette[9].color,
                color_name: colorPalette[9].color_name
            }, {
                color: colorPalette[10].color,
                highlight: colorPalette[10].color,
                color_name: colorPalette[10].color_name
            }, {
                color: colorPalette[11].color,
                highlight: colorPalette[11].color,
                color_name: colorPalette[11].color_name
            }]
        },
        bar: {
            options: {
                //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                scaleBeginAtZero: true,
                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: true,
                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth: 1,
                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,
                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,
                //Boolean - If there is a stroke on each bar
                barShowStroke: true,
                //Number - Pixel width of the bar stroke
                barStrokeWidth: 2,
                //Number - Spacing between each of the X value sets
                barValueSpacing: 5,
                //Number - Spacing between data sets within X values
                barDatasetSpacing: 1,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
                //Boolean - whether to make the chart responsive
                responsive: true,
                maintainAspectRatio: true,
                datasetFill: false
            },
            colors: [{
                fillColor: colorPalette[0].color,
                strokeColor: colorPalette[0].color,
                pointColor: colorPalette[0].color
            }, {
                fillColor: colorPalette[1].color,
                strokeColor: colorPalette[1].color,
                pointColor: colorPalette[1].color
            }, {
                fillColor: colorPalette[2].color,
                strokeColor: colorPalette[2].color,
                pointColor: colorPalette[2].color
            }, {
                fillColor: colorPalette[3].color,
                strokeColor: colorPalette[3].color,
                pointColor: colorPalette[3].color
            }, {
                fillColor: colorPalette[4].color,
                strokeColor: colorPalette[4].color,
                pointColor: colorPalette[4].color
            }, {
                fillColor: colorPalette[5].color,
                strokeColor: colorPalette[5].color,
                pointColor: colorPalette[5].color
            }, {
                fillColor: colorPalette[6].color,
                strokeColor: colorPalette[6].color,
                pointColor: colorPalette[6].color
            }, {
                fillColor: colorPalette[7].color,
                strokeColor: colorPalette[7].color,
                pointColor: colorPalette[7].color
            }, {
                fillColor: colorPalette[8].color,
                strokeColor: colorPalette[8].color,
                pointColor: colorPalette[8].color
            }, {
                fillColor: colorPalette[9].color,
                strokeColor: colorPalette[9].color,
                pointColor: colorPalette[9].color
            }, {
                fillColor: colorPalette[10].color,
                strokeColor: colorPalette[10].color,
                pointColor: colorPalette[10].color
            }, {
                fillColor: colorPalette[11].color,
                strokeColor: colorPalette[11].color,
                pointColor: colorPalette[11].color
            }]
        },
        toplist: {
            colors: [{
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }, {
                color_name: colorPalette[3].color_name
            }]
        },
        line: {
            options: {
                ///Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: true,
                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth: 1,
                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,
                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,
                //Boolean - Whether the line is curved between points
                bezierCurve: true,
                //Number - Tension of the bezier curve between points
                bezierCurveTension: 0.4,
                //Boolean - Whether to show a dot for each point
                pointDot: true,
                //Number - Radius of each point dot in pixels
                pointDotRadius: 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke: true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth: 2,
                //Boolean - Whether to fill the dataset with a colour
                datasetFill: false,
                responsive: true,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
                tooltipTemplate: "<%= value %>",
                tooltipCaretSize: 0
            },
            colors: [{
                fillColor: colorPalette[0].color,
                strokeColor: colorPalette[0].color,
                pointColor: colorPalette[0].color,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: colorPalette[0].color
            }, {
                fillColor: colorPalette[1].color,
                strokeColor: colorPalette[1].color,
                pointColor: colorPalette[1].color,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: colorPalette[1].color
            }]
        }
    };

    return {
        'color_palette': colorPalette,
        'chart_options': chartOptions
    };
}();

window.statistics_panel.widgets = function () {
    var Widget = function () {
        function Widget(id) {
            _classCallCheck(this, Widget);

            this.id = id;
        }

        _createClass(Widget, [{
            key: "setTitle",
            value: function setTitle(text) {
                this.getTitle().html(text);
            }
        }, {
            key: "getTitle",
            value: function getTitle() {
                return $('.title', this.id);
            }
        }, {
            key: "getFooter",
            value: function getFooter() {
                return $('footer', this.id);
            }
        }, {
            key: "setFooter",
            value: function setFooter(text) {
                this.getFooter().html(text);
            }
        }, {
            key: "getLoadIcon",
            value: function getLoadIcon() {
                return $('.overlay', this.id);
            }
        }, {
            key: "setLoadIcon",
            value: function setLoadIcon(isVisible) {
                if (isVisible) {
                    this.getLoadIcon().removeClass('hide');
                } else {
                    this.getLoadIcon().addClass('hide');
                }
            }
        }, {
            key: "getType",
            value: function getType() {
                return $(this.id).data('type');
            }
        }]);

        return Widget;
    }();

    var ChartWidget = function (_Widget) {
        _inherits(ChartWidget, _Widget);

        function ChartWidget(id, colors, options) {
            _classCallCheck(this, ChartWidget);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChartWidget).call(this, id));

            _this.chart = null;
            _this.colors = colors;
            _this.options = options;
            return _this;
        }

        _createClass(ChartWidget, [{
            key: "getDiagram",
            value: function getDiagram() {
                return $('.diagram', this.id);
            }
        }, {
            key: "getChart",
            value: function getChart() {
                return this.chart;
            }
        }, {
            key: "setOptions",
            value: function setOptions(options) {
                this.options = options;
            }
        }, {
            key: "getOptions",
            value: function getOptions() {
                return this.options;
            }
        }, {
            key: "setColors",
            value: function setColors(colors) {
                this.colors = colors;
            }
        }, {
            key: "getColors",
            value: function getColors() {
                return this.colors;
            }
        }]);

        return ChartWidget;
    }(Widget);

    var GridWidget = function (_Widget2) {
        _inherits(GridWidget, _Widget2);

        function GridWidget() {
            _classCallCheck(this, GridWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(GridWidget).apply(this, arguments));
        }

        _createClass(GridWidget, [{
            key: "getGridBody",
            value: function getGridBody() {
                return $('.box-body', this.id);
            }
        }, {
            key: "setGrid",
            value: function setGrid(data) {
                var gridBodyHtml = '',
                    i = void 0,
                    maxRow = void 0,
                    j = void 0,
                    maxHeadLen = void 0,
                    k = void 0,
                    maxBodyLen = void 0,
                    c = void 0,
                    maxCol = void 0;

                gridBodyHtml += '<div class="row">';

                if (data.datasets) {
                    for (i = 0, maxRow = data.datasets.length; i < maxRow; i += 1) {
                        gridBodyHtml += '<div class="col-md-' + 12 / data.datasets.length + '">' + '<table class="table no-margin table-striped table-hover table-bordered">';

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
            }
        }]);

        return GridWidget;
    }(Widget);

    var BoxWidget = function (_Widget3) {
        _inherits(BoxWidget, _Widget3);

        function BoxWidget() {
            _classCallCheck(this, BoxWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(BoxWidget).apply(this, arguments));
        }

        _createClass(BoxWidget, [{
            key: "getValue",
            value: function getValue() {
                return $('.value', this.id);
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                this.getValue().html(value);
            }
        }]);

        return BoxWidget;
    }(Widget);

    var DoughnutChartWidget = function (_ChartWidget) {
        _inherits(DoughnutChartWidget, _ChartWidget);

        function DoughnutChartWidget() {
            _classCallCheck(this, DoughnutChartWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(DoughnutChartWidget).apply(this, arguments));
        }

        _createClass(DoughnutChartWidget, [{
            key: "getLegend",
            value: function getLegend() {
                return $('.chart-legend', this.id);
            }
        }, {
            key: "setLegend",
            value: function setLegend(data) {
                var legend = '',
                    i = void 0,
                    max = void 0;

                for (i = 0, max = data.length; i < max; i += 1) {
                    legend += '<li><i class="fa fa-circle-o text-' + this.colors[i].color_name + '"></i>' + data[i].label + '</li>';
                }

                return legend;
            }
        }, {
            key: "colorize",
            value: function colorize(data) {
                var i, max;

                if (data) {
                    for (i = 0, max = data.length; i < max; i += 1) {
                        data[i].color = this.colors[i].color;
                        data[i].highlight = this.colors[i].highlight;
                    }
                }

                return data;
            }
        }, {
            key: "setDiagram",
            value: function setDiagram(data) {
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
            }
        }]);

        return DoughnutChartWidget;
    }(ChartWidget);

    var GoalCompletionWidget = function (_BoxWidget) {
        _inherits(GoalCompletionWidget, _BoxWidget);

        function GoalCompletionWidget() {
            _classCallCheck(this, GoalCompletionWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(GoalCompletionWidget).apply(this, arguments));
        }

        _createClass(GoalCompletionWidget, [{
            key: "setDescription",
            value: function setDescription(description) {
                $('.progress-description', this.id).text(description);
            }
        }, {
            key: "setPercent",
            value: function setPercent(percent) {
                $('.progress-bar', this.id).css('width', percent + '%');
            }
        }]);

        return GoalCompletionWidget;
    }(BoxWidget);

    var LineChartWidget = function (_ChartWidget2) {
        _inherits(LineChartWidget, _ChartWidget2);

        function LineChartWidget() {
            _classCallCheck(this, LineChartWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(LineChartWidget).apply(this, arguments));
        }

        _createClass(LineChartWidget, [{
            key: "setDiagram",
            value: function setDiagram(data) {
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
            }
        }, {
            key: "colorize",
            value: function colorize(data) {
                var i = void 0,
                    max = void 0;
                for (i = 0, max = data.datasets.length; i < max; i += 1) {
                    data.datasets[i].fillColor = this.colors[i].fillColor;
                    data.datasets[i].strokeColor = this.colors[i].strokeColor;
                    data.datasets[i].pointColor = this.colors[i].pointColor;
                    data.datasets[i].pointStrokeColor = this.colors[i].pointStrokeColor;
                    data.datasets[i].pointHighlightFill = this.colors[i].pointHighlightFill;
                    data.datasets[i].pointHighlightStroke = this.colors[i].pointHighlightStroke;
                }

                return data;
            }
        }]);

        return LineChartWidget;
    }(ChartWidget);

    var ToplistWidget = function (_Widget4) {
        _inherits(ToplistWidget, _Widget4);

        function ToplistWidget(id, colors) {
            _classCallCheck(this, ToplistWidget);

            var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(ToplistWidget).call(this, id));

            _this7.colors = colors;
            return _this7;
        }

        _createClass(ToplistWidget, [{
            key: "getGridBody",
            value: function getGridBody() {
                return $('.box-body', this.id);
            }
        }, {
            key: "setGrid",
            value: function setGrid(data) {
                var gridBodyHtml = '',
                    i,
                    maxRow,
                    j,
                    maxCol;

                gridBodyHtml += '<div class="row">';

                if (data.datasets) {
                    for (i = 0, maxRow = data.datasets.length; i < maxRow; i += 1) {
                        gridBodyHtml += '<div class="col-md-' + 12 / data.datasets.length + '"><div class="progress-group">';

                        for (j = 0, maxCol = data.datasets[i].length; j < maxCol; j += 1) {
                            gridBodyHtml += '<span class="progress-text">' + data.datasets[i][j][0] + '</span>' + '<span class="progress-number"><b>' + data.datasets[i][j][1] + '</b></span>' + '<div class="progress sm">' + '<div class="progress-bar bg-' + this.colors[j].color_name + '" style="width: ' + 100 * (data.datasets[i][j][1] / data.datasets[i][0][1]) + '%"></div>' + '</div>';
                        }

                        gridBodyHtml += '</div></div>';
                    }
                } else {
                    gridBodyHtml += '<div class="col-md-12 text-center margin">No data to display</div>';
                }

                gridBodyHtml += '</div>';

                this.getGridBody().html(gridBodyHtml);
            }
        }]);

        return ToplistWidget;
    }(Widget);

    var MapToplistWidget = function (_GridWidget) {
        _inherits(MapToplistWidget, _GridWidget);

        function MapToplistWidget(id, options) {
            _classCallCheck(this, MapToplistWidget);

            var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(MapToplistWidget).call(this, id));

            _this8.markerClusterer = null;
            var settings = $.extend({}, {}, options || {});

            var mapStyle = [{
                "featureType": "landscape",
                "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }]
            }, {
                "featureType": "poi",
                "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }]
            }, {
                "featureType": "road.highway",
                "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }]
            }, {
                "featureType": "road.arterial",
                "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }]
            }, {
                "featureType": "road.local",
                "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }]
            }, {
                "featureType": "transit",
                "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }]
            }, {
                "featureType": "administrative.province",
                "stylers": [{ "visibility": "off" }]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }]
            }];

            var mapOptions = {
                zoom: 6,
                center: new google.maps.LatLng(47.5011151657, 19.0531965145),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: mapStyle
            };

            _this8.map = new google.maps.Map($('.map', _this8.id)[0], mapOptions);
            return _this8;
        }

        _createClass(MapToplistWidget, [{
            key: "getGridBody",
            value: function getGridBody() {
                return $('.toplist', this.id);
            }
        }, {
            key: "setMultiMap",
            value: function setMultiMap(data) {
                var i = void 0,
                    max = void 0,
                    markers = [];

                if (this.markerClusterer) {
                    this.markerClusterer.clearMarkers();
                }

                if (data.map) {
                    for (i = 0, max = data.map.length; i < max; i += 1) {
                        var latLng = new google.maps.LatLng(data.map[i].lat, data.map[i].lng);
                        var marker = new google.maps.Marker({
                            position: latLng,
                            title: data.map[i].name + ': ' + data.map[i].value
                        });

                        markers.push(marker);
                    }

                    this.markerClusterer = new MarkerClusterer(this.map, markers, { imagePath: '/images/vendor/js-marker-clusterer/m' });

                    this.markerClusterer.setCalculator(function (markers, numStyles) {
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
            }
        }]);

        return MapToplistWidget;
    }(GridWidget);

    var BarChartWidget = function (_ChartWidget3) {
        _inherits(BarChartWidget, _ChartWidget3);

        function BarChartWidget() {
            _classCallCheck(this, BarChartWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(BarChartWidget).apply(this, arguments));
        }

        _createClass(BarChartWidget, [{
            key: "setDiagram",
            value: function setDiagram(data) {
                if (this.chart !== null) {
                    this.chart.destroy();
                }

                var chart = new Chart(this.getDiagram()[0].getContext("2d"));
                //        var ez = 'Bar';
                //        this.chart = chart[ez](ChartHelper.barColorize(data), this.getOptions());
                this.chart = chart.Bar(this.colorize(data), this.getOptions());
            }
        }, {
            key: "colorize",
            value: function colorize(data) {
                var i, max;

                for (i = 0, max = data.datasets.length; i < max; i += 1) {
                    data.datasets[i].fillColor = this.colors[i].fillColor;
                    data.datasets[i].strokeColor = this.colors[i].strokeColor;
                    data.datasets[i].pointColor = this.colors[i].pointColor;
                }

                return data;
            }
        }]);

        return BarChartWidget;
    }(ChartWidget);

    return {
        'base': Widget,
        'chart': ChartWidget,
        'grid': GridWidget,
        'box': BoxWidget,
        'doughnut_chart': DoughnutChartWidget,
        'goal_completion': GoalCompletionWidget,
        'line_chart': LineChartWidget,
        'toplist': ToplistWidget,
        'map_toplist': MapToplistWidget,
        'bar_chart': BarChartWidget
    };
}();

window.statistics_panel.stat_widgets = function ($) {
    var StatGoalCompletionWidget = function (_window$statistics_pa) {
        _inherits(StatGoalCompletionWidget, _window$statistics_pa);

        function StatGoalCompletionWidget(id) {
            _classCallCheck(this, StatGoalCompletionWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(StatGoalCompletionWidget).call(this, id));
        }

        _createClass(StatGoalCompletionWidget, [{
            key: "init",
            value: function init() {}
        }, {
            key: "update",
            value: function update(data) {
                this.setPercent(data.percent);
                this.setDescription(data.description);
                this.setValue(data.reached);
            }
        }]);

        return StatGoalCompletionWidget;
    }(window.statistics_panel.widgets.goal_completion);

    var StatToplistWidget = function (_window$statistics_pa2) {
        _inherits(StatToplistWidget, _window$statistics_pa2);

        function StatToplistWidget(id) {
            _classCallCheck(this, StatToplistWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(StatToplistWidget).call(this, id, window.statistics_panel.config.chart_options.toplist.colors));
        }

        _createClass(StatToplistWidget, [{
            key: "init",
            value: function init() {}
        }, {
            key: "update",
            value: function update(data) {
                this.setGrid(data);
            }
        }]);

        return StatToplistWidget;
    }(window.statistics_panel.widgets.toplist);

    var StatGridWidget = function (_window$statistics_pa3) {
        _inherits(StatGridWidget, _window$statistics_pa3);

        function StatGridWidget(id) {
            _classCallCheck(this, StatGridWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(StatGridWidget).call(this, id));
        }

        _createClass(StatGridWidget, [{
            key: "init",
            value: function init() {}
        }, {
            key: "update",
            value: function update(data) {
                this.setGrid(data);
            }
        }]);

        return StatGridWidget;
    }(window.statistics_panel.widgets.grid);

    var StatDoughnutChartWidget = function (_window$statistics_pa4) {
        _inherits(StatDoughnutChartWidget, _window$statistics_pa4);

        function StatDoughnutChartWidget(id) {
            _classCallCheck(this, StatDoughnutChartWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(StatDoughnutChartWidget).call(this, id, window.statistics_panel.config.chart_options.pie.colors, window.statistics_panel.config.chart_options.pie.options));
        }

        _createClass(StatDoughnutChartWidget, [{
            key: "init",
            value: function init() {}
        }, {
            key: "update",
            value: function update(data) {
                this.setDiagram(data);
            }
        }]);

        return StatDoughnutChartWidget;
    }(window.statistics_panel.widgets.doughnut_chart);

    var StatMapToplistWidget = function (_window$statistics_pa5) {
        _inherits(StatMapToplistWidget, _window$statistics_pa5);

        function StatMapToplistWidget(id) {
            _classCallCheck(this, StatMapToplistWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(StatMapToplistWidget).call(this, id, window.statistics_panel.config.chart_options.toplist.colors));
        }

        _createClass(StatMapToplistWidget, [{
            key: "init",
            value: function init() {}
        }, {
            key: "update",
            value: function update(data) {
                this.setMultiMap(data);
            }
        }]);

        return StatMapToplistWidget;
    }(window.statistics_panel.widgets.map_toplist);

    var StatLineChartWidget = function (_window$statistics_pa6) {
        _inherits(StatLineChartWidget, _window$statistics_pa6);

        function StatLineChartWidget(id) {
            _classCallCheck(this, StatLineChartWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(StatLineChartWidget).call(this, id, window.statistics_panel.config.chart_options.line.colors, window.statistics_panel.config.chart_options.line.options));
        }

        _createClass(StatLineChartWidget, [{
            key: "init",
            value: function init() {}
        }, {
            key: "update",
            value: function update(data) {
                this.setDiagram(data);
            }
        }]);

        return StatLineChartWidget;
    }(window.statistics_panel.widgets.line_chart);

    var StatBoxWidget = function (_window$statistics_pa7) {
        _inherits(StatBoxWidget, _window$statistics_pa7);

        function StatBoxWidget() {
            _classCallCheck(this, StatBoxWidget);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(StatBoxWidget).apply(this, arguments));
        }

        _createClass(StatBoxWidget, [{
            key: "init",
            value: function init() {}
        }, {
            key: "update",
            value: function update(data) {
                this.setValue(data);
            }
        }]);

        return StatBoxWidget;
    }(window.statistics_panel.widgets.box);

    return {
        'goal_completion': StatGoalCompletionWidget,
        'toplist': StatToplistWidget,
        'grid': StatGridWidget,
        'doughnut_chart': StatDoughnutChartWidget,
        'map_toplist': StatMapToplistWidget,
        'line_chart': StatLineChartWidget,
        'box': StatBoxWidget
    };
}(jQuery);

window.statistics_panel.boxes = function ($) {
    var StatisticsBox = function () {
        function StatisticsBox(context, source) {
            _classCallCheck(this, StatisticsBox);

            this.context = context;
            this.source = source;
        }

        _createClass(StatisticsBox, [{
            key: "init",
            value: function init() {
                var _this17 = this;

                $('.stat-widget', this.context).each(function (i, item) {
                    return _this17.setWidget($(item));
                });
                this.boot();
            }
        }, {
            key: "boot",
            value: function boot() {
                this.fetchDatas();
            }
        }, {
            key: "setLoadIcons",
            value: function setLoadIcons(isLoading) {
                $('.stat-widget', this.context).each(function (i, item) {
                    return $(item).data('widget').setLoadIcon(isLoading);
                });
            }
        }, {
            key: "updateWidgets",
            value: function updateWidgets(data) {
                var id,
                    statWidgets = $('.stat-widget', this.context);

                for (id in data) {
                    var $stat = statWidgets.filter('[data-stat-id="' + id + '"]');

                    if ($stat.length > 0) {
                        $stat.data('widget').update(data[id]);
                        $stat.data('widget').setLoadIcon(false);
                    }
                }
            }
        }, {
            key: "setWidget",
            value: function setWidget($item) {
                var widget = new window.statistics_panel.stat_widgets[$item.data('type')]($item);
                widget.init($item);

                $item.data('widget', widget);
            }
        }, {
            key: "fetchDatas",
            value: function fetchDatas() {
                var _this18 = this;

                this.setLoadIcons(true);

                $.ajax({
                    type: 'GET',
                    url: this.source
                }).done(function (data) {
                    return _this18.updateWidgets(data);
                });
            }
        }]);

        return StatisticsBox;
    }();

    var TimeIndependentBox = function (_StatisticsBox) {
        _inherits(TimeIndependentBox, _StatisticsBox);

        function TimeIndependentBox() {
            _classCallCheck(this, TimeIndependentBox);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(TimeIndependentBox).apply(this, arguments));
        }

        _createClass(TimeIndependentBox, [{
            key: "boot",
            value: function boot() {
                this.fetchDatas();
            }
        }, {
            key: "fetchDatas",
            value: function fetchDatas() {
                var _this20 = this;

                this.setLoadIcons(true);

                $.ajax({
                    type: 'GET',
                    url: this.source
                }).done(function (data) {
                    return _this20.updateWidgets(data);
                });
            }
        }]);

        return TimeIndependentBox;
    }(StatisticsBox);

    var MonthlyBox = function (_StatisticsBox2) {
        _inherits(MonthlyBox, _StatisticsBox2);

        function MonthlyBox() {
            _classCallCheck(this, MonthlyBox);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(MonthlyBox).apply(this, arguments));
        }

        _createClass(MonthlyBox, [{
            key: "boot",
            value: function boot() {
                var _this22 = this;

                $('input.stat_interval', this.context).datepicker({
                    format: "yyyy/mm",
                    startView: "months",
                    minViewMode: "months",
                    autoclose: true
                }).on('changeDate', function () {
                    return _this22.fetchDatas();
                });

                this.fetchDatas();
            }
        }, {
            key: "fetchDatas",
            value: function fetchDatas() {
                var _this23 = this;

                var params = void 0,
                    dateFromParams = $('input.stat_interval.from', this.context).val().split("/");

                this.setLoadIcons(true);

                params = {
                    'in': {
                        year: dateFromParams[0],
                        month: dateFromParams[1]
                    }
                };

                $.ajax({
                    type: 'GET',
                    url: this.source,
                    data: params
                }).done(function (data) {
                    return _this23.updateWidgets(data);
                });
            }
        }]);

        return MonthlyBox;
    }(StatisticsBox);

    var MonthIntervalBox = function (_MonthlyBox) {
        _inherits(MonthIntervalBox, _MonthlyBox);

        function MonthIntervalBox() {
            _classCallCheck(this, MonthIntervalBox);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(MonthIntervalBox).apply(this, arguments));
        }

        _createClass(MonthIntervalBox, [{
            key: "fetchDatas",
            value: function fetchDatas() {
                var _this25 = this;

                var params = void 0,
                    dateFromParams = $('input.stat_interval.from', this.context).val().split("/"),
                    dateToParams = $('input.stat_interval.to', this.context).val().split("/");

                this.setLoadIcons(true);

                params = {
                    'from': {
                        year: dateFromParams[0],
                        month: dateFromParams[1]
                    },
                    'to': {
                        year: dateToParams[0],
                        month: dateToParams[1]
                    }
                };

                $.ajax({
                    type: 'GET',
                    url: this.source,
                    data: params
                }).done(function (data) {
                    return _this25.updateWidgets(data);
                });
            }
        }]);

        return MonthIntervalBox;
    }(MonthlyBox);

    return {
        'base': StatisticsBox,
        'time_independent': TimeIndependentBox,
        'monthly': MonthlyBox,
        'month_interval': MonthIntervalBox
    };
}(jQuery);