function StatBarChartWidget (id) {
    this.id = id;

    window.statistics_panel.widgets.bar_chart.apply(this, Array.prototype.slice.call(arguments));
}

StatBarChartWidget.prototype = new  window.statistics_panel.widgets.bar_chart();

StatGoalCompletionWidget.prototype.init = function () {

};

StatGoalCompletionWidget.prototype.update = function (data) {
    this.setDiagram(data);
};