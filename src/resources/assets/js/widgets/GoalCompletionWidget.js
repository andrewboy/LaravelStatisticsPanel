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