class Widget {
    constructor(id) {
        this.id = id;
    }

    setTitle(text) {
        this.getTitle().html(text);
    }

    getTitle() {
        return $('.title', this.id);
    }

    getFooter() {
        return $('footer', this.id);
    }

    setFooter(text) {
        this.getFooter().html(text);
    }

    getLoadIcon() {
        return $('.overlay', this.id);
    }

    setLoadIcon(isVisible) {
        if(isVisible) {
            this.getLoadIcon().removeClass('hide');
        } else {
            this.getLoadIcon().addClass('hide');
        }
    }

    getType() {
        return $(this.id).data('type');
    }
}
