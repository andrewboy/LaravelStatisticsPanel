class GoalCompletionWidget extends BoxWidget {
    setDescription(description) {
        $('.progress-description', this.id).text(description);
    }

    setPercent(percent) {
        $('.progress-bar', this.id).css('width', percent + '%');
    }
}