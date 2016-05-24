window.statistics_panel = {};

statistics_panel.widgets = (function(){
    //=require js/widgets/Widget.js

    //=require js/widgets/ChartWidget.js

    //=require js/widgets/GridWidget.js

    //=require js/widgets/BoxWidget.js

    //=require js/widgets/DoughnutChartWidget.js

    //=require js/widgets/GoalCompletionWidget.js

    //=require js/widgets/LineChartWidget.js

    //=require js/widgets/ToplistWidget.js

    //=require js/widgets/MapToplist.js

    //=require js/widgets/BarChartWidget.js

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

window.statistics_panel.widgets.extend = function (modules) {
    $.extend(statistics_panel.widgets, modules);
};


window.statistics_panel.boxes = (function(){
    //=require js/boxes/TimeIndependentBox.js

    return {
        TimeIndependentBox: TimeIndependentBox,
    };
}());