class BoxWidget extends Widget {
    getValue() {
        return $('.value', this.id);
    }

    setValue(value) {
        this.getValue().html(value);
    }
}