class StatGoalCompletionWidget extends GoalCompletionWidget {
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