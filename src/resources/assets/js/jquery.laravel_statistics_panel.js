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
    //=require config/colorPalette.js
    //=require config/chartOptions.js

    return {
        'color_palette': colorPalette,
        'chart_options': chartOptions
    };
}());

window.statistics_panel.widgets = (function () {
    //=require widgets/Widget.js
    //=require widgets/ChartWidget.js
    //=require widgets/GridWidget.js
    //=require widgets/BoxWidget.js
    //=require widgets/DoughnutChartWidget.js
    //=require widgets/GoalCompletionWidget.js
    //=require widgets/LineChartWidget.js
    //=require widgets/ToplistWidget.js
    //=require widgets/MapToplistWidget.js
    //=require widgets/BarChartWidget.js

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
}());


window.statistics_panel.stat_widgets = (function ($) {
    //=require stat_widgets/StatGoalCompletionWidget.js
    //=require stat_widgets/StatToplistWidget.js
    //=require stat_widgets/StatGridWidget.js
    //=require stat_widgets/StatDoughnutChartWidget.js
    //=require stat_widgets/StatMapToplistWidget.js
    //=require stat_widgets/StatLineChartWidget.js

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
    //=require boxes/StatisticsBox.js
    //=require boxes/TimeIndependentBox.js
    //=require boxes/MonthlyBox.js
    //=require boxes/MonthIntervalBox.js

    return {
        'base': StatisticsBox,
        'time_independent': TimeIndependentBox,
        'monthly': MonthlyBox,
        'month_interval': MonthIntervalBox
    };
}(jQuery));
