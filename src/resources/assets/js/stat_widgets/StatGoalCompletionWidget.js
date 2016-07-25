class StatGoalCompletionWidget extends window.statistics_panel.widgets.goal_completion {
    constructor(id) {
        super(id);
    }

    init() {}

    update(data) {
        this.setPercent(data.percent);
        this.setDescription(data.description);
        this.setValue(data.reached);
    }
}