class Widget {
    constructor(id) {
        this.id = id;
    }

    set title(text) {
        this.getTitle().html(text);
    }

    get title() {
        return $('.title', this.id);
    }

    get footer() {
        return $('footer', this.id);
    }

    set footer(text) {
        this.getFooter().html(text);
    }

    get loadIcon() {
        return $('.overlay', this.id);
    }

    set loadIcon(isVisible) {
        if(isVisible) {
            this.getLoadIcon().removeClass('hide');
        } else {
            this.getLoadIcon().addClass('hide');
        }
    }

    get type() {
        return $(this.id).data('type');
    }
}
