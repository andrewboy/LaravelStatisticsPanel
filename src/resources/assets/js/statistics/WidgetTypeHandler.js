/*global Widget*/
/*global jQuery*/
/*global ChartOptions*/
/*global widgetColorPalette*/
var WidgetTypeHandler = (function ($, Widget, ChartOptions, widgetColorPalette) {
    "use strict";

    return {
        box: {
            init: function (id) {
                return new Widget.BoxWidget(id);
            },
            update: function (widget, data) {
                widget.setValue(data);
            }
        },
        bar: {
            init: function (id) {
                return new Widget.BarChartWidget(id, ChartOptions.bar.colors, ChartOptions.bar.options);
            },
            update: function (widget, data) {
                widget.setDiagram(data);
            }
        },
        line: {
            init: function (id) {
                return new Widget.LineChartWidget(id, ChartOptions.line.colors, ChartOptions.line.options);
            },
            update: function (widget, data) {
                widget.setDiagram(data);
            }
        },
        line_with_goal: {
            init: function (id) {
                var colors = [
                    {
                        fillColor: widgetColorPalette[0].color,
                        strokeColor: widgetColorPalette[0].color,
                        pointColor: widgetColorPalette[0].color,
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: widgetColorPalette[0].color
                    },
                    {
                        fillColor: widgetColorPalette[4].color,
                        strokeColor: widgetColorPalette[4].color,
                        pointColor: widgetColorPalette[4].color,
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: widgetColorPalette[4].color
                    }
                ];

                return new Widget.LineChartWidget(id, colors, ChartOptions.line.options);
            },
            update: function (widget, data) {
                widget.setDiagram(data);
            }
        },
        doughnut: {
            init: function (id) {
                return new Widget.DoughnutChartWidget(id, ChartOptions.pie.colors, ChartOptions.pie.options);
            },
            update: function (widget, data) {
                widget.setDiagram(data);
            }
        },
        grid: {
            init: function (id) {
                return new Widget.GridWidget(id);
            },
            update: function (widget, data) {
                widget.setGrid(data);
            }
        },
        diaper_grid: {
            init: function (id) {
                return new Widget.GridWidget(id);
            },
            update: function (widget, data) {
                widget.setGrid(data.data);
                $('.summary', widget.getFooter()).text(data.total);
            }
        },
        toplist: {
            init: function (id) {
                return new Widget.ToplistWidget(id, ChartOptions.toplist.colors);
            },
            update: function (widget, data) {
                widget.setGrid(data);
            }
        },
        goal_completion: {
            init: function (id) {
                return new Widget.GoalCompletionWidget(id);
            },
            update: function (widget, data) {
                widget.setPercent(data.percent);
                widget.setDescription(data.description);
                widget.setValue(data.reached);
            }
        },
        map_toplist: {
            init: function (id) {
                return new Widget.MapToplist(id, {
                    markerStyle: {
                        initial: {
                            fill: widgetColorPalette[4].color
                        }
                    },
                    onMarkerTipShow: function (e, label, code) {
                        var map = $(e.currentTarget).parent().vectorMap('get', 'mapObject');
                        map.tip.text(map.markers[code].config.name + ': ' + map.markers[code].config.amount);
                    }
                });
            },
            update: function (widget, data) {
                widget.setMultiMap(data);
            }
        }
    };
}(jQuery, Widget, ChartOptions, widgetColorPalette));