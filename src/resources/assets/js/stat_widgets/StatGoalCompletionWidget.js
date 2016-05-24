function StatGoalCompletionWidget (id) {
    this.id = id;
    this.widget = null;

    window.statistics_panel.widgets.GoalCompletionWidget.apply(this, Array.prototype.slice.call(arguments));
}

StatGoalCompletionWidget.prototype = new  window.statistics_panel.widgets.GoalCompletionWidget();

StatGoalCompletionWidget.prototype.init = function () {

};

StatGoalCompletionWidget.prototype.update = function (data) {
    this.widget.setPercent(data.percent);
    this.widget.setDescription(data.description);
    this.widget.setValue(data.reached);
};