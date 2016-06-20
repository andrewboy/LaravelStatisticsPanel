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