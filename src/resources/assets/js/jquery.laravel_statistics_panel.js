window.statistics_panel = {};

window.statistics_panel.config = (($) => {
    //=require config/colorPalette.js
    //=require config/chartOptions.js

    return {
        'color_palette': colorPalette,
        'chart_options': chartOptions
    };
})(jQuery);

window.statistics_panel.widgets = (($) => {
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
})(jQuery);

window.statistics_panel.stat_widgets = (($) => {
    //=require stat_widgets/StatGoalCompletionWidget.js
    //=require stat_widgets/StatToplistWidget.js
    //=require stat_widgets/StatGridWidget.js
    //=require stat_widgets/StatDoughnutChartWidget.js
    //=require stat_widgets/StatMapToplistWidget.js
    //=require stat_widgets/StatLineChartWidget.js
    //=require stat_widgets/StatBoxWidget.js
    //=require stat_widgets/StatBarChartWidget.js

    return {
        'goal_completion': StatGoalCompletionWidget,
        'toplist': StatToplistWidget,
        'grid': StatGridWidget,
        'doughnut_chart': StatDoughnutChartWidget,
        'map_toplist': StatMapToplistWidget,
        'line_chart': StatLineChartWidget,
        'box': StatBoxWidget,
        'bar_chart': StatBarChartWidget
    };
})(jQuery);

window.statistics_panel.boxes = (($) => {
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
})(jQuery);

//jQuery wrapper

(($, stat_panel) => {
    $.fn.timeIndependentStatistics = function(url) {
        if ($(this).length > 0) {
            let stat = new stat_panel.boxes.time_independent($(this), url);
            stat.init();
        }
    };
})(jQuery, window.statistics_panel);

(($, stat_panel) => {
    $.fn.monthlyStatistics = function(url) {
        if ($(this).length > 0) {
            let stat = new stat_panel.boxes.monthly($(this), url);
            stat.init();
        }
    };
})(jQuery, window.statistics_panel);

(($, stat_panel) => {
    $.fn.monthIntervalStatistics = function(url) {
        if ($(this).length > 0) {
            let stat = new stat_panel.boxes.month_interval($(this), url);
            stat.init();
        }
    };
})(jQuery, window.statistics_panel);