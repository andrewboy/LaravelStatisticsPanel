class StatBarChartWidget extends BarChartWidget{
    constructor(id) {
        super(id);
        this.id = id;
    }

    init() {

    }

    update(data) {
        this.setDiagram(data);
    }
}