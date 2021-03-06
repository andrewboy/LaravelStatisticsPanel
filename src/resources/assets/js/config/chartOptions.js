const chartOptions = {
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
                color: colorPalette[0].color,
                highlight: colorPalette[0].color,
                color_name: colorPalette[0].color_name
            },
            {
                color: colorPalette[1].color,
                highlight: colorPalette[1].color,
                color_name: colorPalette[1].color_name
            },
            {
                color: colorPalette[2].color,
                highlight: colorPalette[2].color,
                color_name: colorPalette[2].color_name
            },
            {
                color: colorPalette[3].color,
                highlight: colorPalette[3].color,
                color_name: colorPalette[3].color_name
            },
            {
                color: colorPalette[4].color,
                highlight: colorPalette[4].color,
                color_name: colorPalette[4].color_name
            },
            {
                color: colorPalette[5].color,
                highlight: colorPalette[5].color,
                color_name: colorPalette[5].color_name
            },
            {
                color: colorPalette[6].color,
                highlight: colorPalette[6].color,
                color_name: colorPalette[6].color_name
            },
            {
                color: colorPalette[7].color,
                highlight: colorPalette[7].color,
                color_name: colorPalette[7].color_name
            },
            {
                color: colorPalette[8].color,
                highlight: colorPalette[8].color,
                color_name: colorPalette[8].color_name
            },
            {
                color: colorPalette[9].color,
                highlight: colorPalette[9].color,
                color_name: colorPalette[9].color_name
            },
            {
                color: colorPalette[10].color,
                highlight: colorPalette[10].color,
                color_name: colorPalette[10].color_name
            },
            {
                color: colorPalette[11].color,
                highlight: colorPalette[11].color,
                color_name: colorPalette[11].color_name
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
                fillColor: colorPalette[0].color,
                strokeColor: colorPalette[0].color,
                pointColor: colorPalette[0].color
            },
            {
                fillColor: colorPalette[1].color,
                strokeColor: colorPalette[1].color,
                pointColor: colorPalette[1].color
            },
            {
                fillColor: colorPalette[2].color,
                strokeColor: colorPalette[2].color,
                pointColor: colorPalette[2].color
            },
            {
                fillColor: colorPalette[3].color,
                strokeColor: colorPalette[3].color,
                pointColor: colorPalette[3].color
            },
            {
                fillColor: colorPalette[4].color,
                strokeColor: colorPalette[4].color,
                pointColor: colorPalette[4].color
            },
            {
                fillColor: colorPalette[5].color,
                strokeColor: colorPalette[5].color,
                pointColor: colorPalette[5].color
            },
            {
                fillColor: colorPalette[6].color,
                strokeColor: colorPalette[6].color,
                pointColor: colorPalette[6].color
            },
            {
                fillColor: colorPalette[7].color,
                strokeColor: colorPalette[7].color,
                pointColor: colorPalette[7].color
            },
            {
                fillColor: colorPalette[8].color,
                strokeColor: colorPalette[8].color,
                pointColor: colorPalette[8].color
            },
            {
                fillColor: colorPalette[9].color,
                strokeColor: colorPalette[9].color,
                pointColor: colorPalette[9].color
            },
            {
                fillColor: colorPalette[10].color,
                strokeColor: colorPalette[10].color,
                pointColor: colorPalette[10].color
            },
            {
                fillColor: colorPalette[11].color,
                strokeColor: colorPalette[11].color,
                pointColor: colorPalette[11].color
            }
        ]
    },
    toplist: {
        colors: [
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
            },
            {
                color_name: colorPalette[3].color_name
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
            responsive: true,
            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
            multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
            tooltipTemplate: "<%= value %>",
            tooltipCaretSize: 0
        },
        colors: [
            {
                fillColor: colorPalette[0].color,
                strokeColor: colorPalette[0].color,
                pointColor: colorPalette[0].color,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: colorPalette[0].color
            },
            {
                fillColor: colorPalette[1].color,
                strokeColor: colorPalette[1].color,
                pointColor: colorPalette[1].color,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: colorPalette[1].color
            }
        ]
    }
};
