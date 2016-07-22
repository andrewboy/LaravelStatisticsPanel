class BoxWidget extends Widget {
    get value() {
        return $('.value', this.id);
    }

    set value(value) {
        this.getValue().html(value);
    }
}