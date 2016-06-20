Function.prototype.inheritsFrom = function( parentClassOrObject ){
    if ( parentClassOrObject.constructor == Function ){
        //Normal Inheritance
        this.prototype = new parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    } else {
        //Pure Virtual Inheritance
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
};

window.statistics_panel = {};

window.statistics_panel.config = (function() {
    var colorPalette = [
        {
            color_name: 'light-blue',
            color: "#3c8dbc",
            highlight: "#3c8dbc"
        },
        {
            color_name: 'gray',
            color: "#d2d6de",
            highlight: "#d2d6de"
        },
        {
            color_name: 'green',
            color: "#00a65a",
            highlight: "#00a65a"
        },
        {
            color_name: 'yellow',
            color: "#f39c12",
            highlight: "#f39c12"
        },
        {
            color_name: 'red',
            color: "#f56954",
            highlight: "#f56954"
        },
        {
            color_name: 'aqua',
            color: "#00c0ef",
            highlight: "#00c0ef"
        },
        {
            color_name: 'navy',
            color: "#001F3F",
            highlight: "#001F3F"
        },
        {
            color_name: 'teal',
            color: "#39CCCC",
            highlight: "#39CCCC"
        },
        {
            color_name: 'purple',
            color: "#605ca8",
            highlight: "#605ca8"
        },
        {
            color_name: 'orange',
            color: "#ff851b",
            highlight: "#ff851b"
        },
        {
            color_name: 'maroon',
            color: "#D81B60",
            highlight: "#D81B60"
        },
        {
            color_name: 'black',
            color: "#111111",
            highlight: "#111111"
        },
    ];
    
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
            colors: [
                {
                    color: widgetColorPalette[0].color,
                    highlight: widgetColorPalette[0].color,
                    color_name: widgetColorPalette[0].color_name
                },
                {
                    color: widgetColorPalette[1].color,
                    highlight: widgetColorPalette[1].color,
                    color_name: widgetColorPalette[1].color_name
                },
                {
                    color: widgetColorPalette[2].color,
                    highlight: widgetColorPalette[2].color,
                    color_name: widgetColorPalette[2].color_name
                },
                {
                    color: widgetColorPalette[3].color,
                    highlight: widgetColorPalette[3].color,
                    color_name: widgetColorPalette[3].color_name
                },
                {
                    color: widgetColorPalette[4].color,
                    highlight: widgetColorPalette[4].color,
                    color_name: widgetColorPalette[4].color_name
                },
                {
                    color: widgetColorPalette[5].color,
                    highlight: widgetColorPalette[5].color,
                    color_name: widgetColorPalette[5].color_name
                },
                {
                    color: widgetColorPalette[6].color,
                    highlight: widgetColorPalette[6].color,
                    color_name: widgetColorPalette[6].color_name
                },
                {
                    color: widgetColorPalette[7].color,
                    highlight: widgetColorPalette[7].color,
                    color_name: widgetColorPalette[7].color_name
                },
                {
                    color: widgetColorPalette[8].color,
                    highlight: widgetColorPalette[8].color,
                    color_name: widgetColorPalette[8].color_name
                },
                {
                    color: widgetColorPalette[9].color,
                    highlight: widgetColorPalette[9].color,
                    color_name: widgetColorPalette[9].color_name
                },
                {
                    color: widgetColorPalette[10].color,
                    highlight: widgetColorPalette[10].color,
                    color_name: widgetColorPalette[10].color_name
                },
                {
                    color: widgetColorPalette[11].color,
                    highlight: widgetColorPalette[11].color,
                    color_name: widgetColorPalette[11].color_name
                }
            ]
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
            colors: [
                {
                    fillColor: widgetColorPalette[0].color,
                    strokeColor: widgetColorPalette[0].color,
                    pointColor: widgetColorPalette[0].color
                },
                {
                    fillColor: widgetColorPalette[1].color,
                    strokeColor: widgetColorPalette[1].color,
                    pointColor: widgetColorPalette[1].color
                },
                {
                    fillColor: widgetColorPalette[2].color,
                    strokeColor: widgetColorPalette[2].color,
                    pointColor: widgetColorPalette[2].color
                },
                {
                    fillColor: widgetColorPalette[3].color,
                    strokeColor: widgetColorPalette[3].color,
                    pointColor: widgetColorPalette[3].color
                },
                {
                    fillColor: widgetColorPalette[4].color,
                    strokeColor: widgetColorPalette[4].color,
                    pointColor: widgetColorPalette[4].color
                },
                {
                    fillColor: widgetColorPalette[5].color,
                    strokeColor: widgetColorPalette[5].color,
                    pointColor: widgetColorPalette[5].color
                },
                {
                    fillColor: widgetColorPalette[6].color,
                    strokeColor: widgetColorPalette[6].color,
                    pointColor: widgetColorPalette[6].color
                },
                {
                    fillColor: widgetColorPalette[7].color,
                    strokeColor: widgetColorPalette[7].color,
                    pointColor: widgetColorPalette[7].color
                },
                {
                    fillColor: widgetColorPalette[8].color,
                    strokeColor: widgetColorPalette[8].color,
                    pointColor: widgetColorPalette[8].color
                },
                {
                    fillColor: widgetColorPalette[9].color,
                    strokeColor: widgetColorPalette[9].color,
                    pointColor: widgetColorPalette[9].color
                },
                {
                    fillColor: widgetColorPalette[10].color,
                    strokeColor: widgetColorPalette[10].color,
                    pointColor: widgetColorPalette[10].color
                },
                {
                    fillColor: widgetColorPalette[11].color,
                    strokeColor: widgetColorPalette[11].color,
                    pointColor: widgetColorPalette[11].color
                }
            ]
        },
        toplist: {
            colors: [
                {
                    color_name: widgetColorPalette[3].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[1].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[2].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[3].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[4].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[5].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[6].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[7].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[8].color_name
                },
                {
                    color_name: widgetColorPalette[3].color_name
    //                color_name: widgetColorPalette[9].color_name
                }
            ]
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
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
                tooltipTemplate: "<%= value %>",
                tooltipCaretSize: 0
            },
            colors: [
                {
                    fillColor: widgetColorPalette[0].color,
                    strokeColor: widgetColorPalette[0].color,
                    pointColor: widgetColorPalette[0].color,
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: widgetColorPalette[0].color
                },
                {
                    fillColor: widgetColorPalette[1].color,
                    strokeColor: widgetColorPalette[1].color,
                    pointColor: widgetColorPalette[1].color,
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: widgetColorPalette[1].color
                }
            ]
        }
    };
    

    return {
        'color_palette': colorPalette,
        'chart_options': chartOptions,
    };
}());

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
        this.chart;
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


window.statistics_panel.stat_widgets = (function () {
    function StatGoalCompletionWidget (id) {
        this.id = id;
    
        window.statistics_panel.widgets.GoalCompletionWidget.apply(this, Array.prototype.slice.call(arguments));
    }
    
    StatGoalCompletionWidget.prototype = new window.statistics_panel.widgets.GoalCompletionWidget();
    
    StatGoalCompletionWidget.prototype.init = function () {
    
    };
    
    StatGoalCompletionWidget.prototype.update = function (data) {
        this.setPercent(data.percent);
        this.setDescription(data.description);
        this.setValue(data.reached);
    };
    function StatToplistWidget(id) {
        this.id = id;
    
        window.statistics_panel.widgets.ToplistWidget.apply(this, [id, window.statistics_panel.config.chart_options.toplist.colors]);
    }
    
    StatToplistWidget.prototype = new window.statistics_panel.widgets.ToplistWidget();
    
    StatToplistWidget.prototype.init = function () {
    
    };
    
    StatToplistWidget.prototype.update = function (data) {
        this.setGrid(data);
    };
    function StatGridWidget(id) {
        this.id = id;
    
        window.statistics_panel.widgets.GridWidget.apply(this, [id]);
    }
    
    StatGridWidget.prototype = new window.statistics_panel.widgets.GridWidget();
    
    StatGridWidget.prototype.init = function () {
    
    };
    
    StatGridWidget.prototype.update = function (data) {
        this.setGrid(data);
    };
    function StatDoughnutChartWidget(id) {
        this.id = id;
    
        window.statistics_panel.widgets.DoughnutChartWidget.apply(
            this, [
                id,
                window.statistics_panel.config.chart_options.pie.colors,
                window.statistics_panel.config.chart_options.pie.options
            ]
        );
    }
    
    StatDoughnutChartWidget.prototype = new window.statistics_panel.widgets.DoughnutChartWidget();
    
    StatDoughnutChartWidget.prototype.init = function () {
    
    };
    
    StatDoughnutChartWidget.prototype.update = function (data) {
        this.setDiagram(data);
    };

    return {
        StatGoalCompletionWidget: StatGoalCompletionWidget,
        StatToplistWidget: StatToplistWidget,
        StatGridWidget: StatGridWidget,
        StatDoughnutChartWidget: StatDoughnutChartWidget,
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
        this.fetchDatas();
    };
    
    StatisticsBox.prototype.setLoadIcons = function (isLoading) {
        $('.stat-widget', this.context).each(function (i, item) {
            $(item).data('widget').setLoadIcon(isLoading);
        });
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
    
        this.setLoadIcons(true);
    
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
    
        StatisticsBox.apply(this, Array.prototype.slice.call(arguments));
    }
    
    //TimeIndependentBox.prototype = new StatisticsBox();
    TimeIndependentBox.inheritsFrom(StatisticsBox);
    
    TimeIndependentBox.prototype.boot = function () {
        this.fetchDatas();
    };
    
    TimeIndependentBox.prototype.fetchDatas = function () {
        var self = this;
    
        this.setLoadIcons(true);
    
        $.ajax({
            type: 'GET',
            url: self.source
        }).done(function (data) {
            self.updateWidgets(data);
        });
    };
    function MonthlyBox(context, source) {
        //this.context = context;
        //this.source = source;
    
        StatisticsBox.apply(this, Array.prototype.slice.call(arguments));
    }
    
    MonthlyBox.inheritsFrom(StatisticsBox);
    
    MonthlyBox.prototype.boot = function () {
        var self = this;
    
        $('input.stat_interval', this.context).datepicker({
            format: "yyyy/mm",
            startView: "months",
            minViewMode: "months",
            autoclose: true
        }).on('changeDate', function () {
            self.fetchDatas();
        });
    
        this.fetchDatas();
    };
    
    //MonthlyBox.prototype = new StatisticsBox();
    
    
    MonthlyBox.prototype.fetchDatas = function () {
        var self = this,
            params,
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
            self.updateWidgets(data);
        });
    };
    function MonthIntervalBox(context, source) {
        //this.context = context;
        //this.source = source;
    
        MonthlyBox.apply(this, Array.prototype.slice.call(arguments));
    }
    
    //MonthIntervalBox.prototype = new MonthlyBox();
    MonthIntervalBox.inheritsFrom(MonthlyBox);
    
    MonthIntervalBox.prototype.fetchDatas = function () {
        var self = this,
            params,
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
            self.updateWidgets(data);
        });
    };

    return {
        StatisticsBox: StatisticsBox,
        TimeIndependentBox: TimeIndependentBox,
        MonthlyBox: MonthlyBox,
        MonthIntervalBox: MonthIntervalBox,
    };
}());
