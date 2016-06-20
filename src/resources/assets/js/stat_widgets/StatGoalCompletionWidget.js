function StatGoalCompletionWidget (id) {
    this.id = id;

    window.statistics_panel.widgets.goal_completion.apply(this, Array.prototype.slice.call(arguments));
}

StatGoalCompletionWidget.prototype = new window.statistics_panel.widgets.goal_completion();

StatGoalCompletionWidget.prototype.init = function () {

};

StatGoalCompletionWidget.prototype.update = function (data) {
    this.setPercent(data.percent);
    this.setDescription(data.description);
    this.setValue(data.reached);
};