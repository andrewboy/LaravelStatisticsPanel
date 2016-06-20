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
    //=require js/config/colorPalette.js
    //=require js/config/chartOptions.js

    return {
        'color_palette': colorPalette,
        'chart_options': chartOptions,
    };
}());

window.statistics_panel.widgets = (function () {
    //=require js/widgets/Widget.js
    //=require js/widgets/ChartWidget.js
    //=require js/widgets/GridWidget.js
    //=require js/widgets/BoxWidget.js
    //=require js/widgets/DoughnutChartWidget.js
    //=require js/widgets/GoalCompletionWidget.js
    //=require js/widgets/LineChartWidget.js
    //=require js/widgets/ToplistWidget.js
    //=require js/widgets/MapToplistWidget.js
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
        MapToplistWidget: MapToplistWidget,
        BarChartWidget: BarChartWidget,
    };
}());


window.statistics_panel.stat_widgets = (function ($) {
    //=require js/stat_widgets/StatGoalCompletionWidget.js
    //=require js/stat_widgets/StatToplistWidget.js
    //=require js/stat_widgets/StatGridWidget.js
    //=require js/stat_widgets/StatDoughnutChartWidget.js
    //=require js/stat_widgets/StatMapToplistWidget.js
    //=require js/stat_widgets/StatLineChartWidget.js

    return {
        'goal_completion': StatGoalCompletionWidget,
        'toplist': StatToplistWidget,
        'grid': StatGridWidget,
        'doughnut_chart': StatDoughnutChartWidget,
        'map_toplist': StatMapToplistWidget,
        'line_chart': StatLineChartWidget
    };
}(jQuery));

//window.statistics_panel.widgets.extend = function (modules) {
//    $.extend(statistics_panel.widgets, modules);
//};

window.statistics_panel.boxes = (function ($) {
    //=require js/boxes/StatisticsBox.js
    //=require js/boxes/TimeIndependentBox.js
    //=require js/boxes/MonthlyBox.js
    //=require js/boxes/MonthIntervalBox.js

    return {
        'base': StatisticsBox,
        'time_independent': TimeIndependentBox,
        'monthly': MonthlyBox,
        'month_interval': MonthIntervalBox,
    };
}(jQuery));
