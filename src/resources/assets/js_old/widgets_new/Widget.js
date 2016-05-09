function Widget(id, colors, options) {
    "use strict";

    this.id = id;
    //this.colors = colors;
    //this.options = options;
}

Widget.prototype.setTitle = function(titleTxt) {
    this.getTitle().html(titleTxt);
};

Widget.prototype.getTitle = function() {
    return $('.title', this.id);
};

Widget.prototype.getFooter = function() {
    return $('.footer', this.id);
};

Widget.prototype.getLoadIcon = function() {
    return $('.overlay', this.id);
};

Widget.prototype.setLoadIcon = function(isVisible) {
    if (isVisible) {
        this.getLoadIcon().removeClass('hide');
    } else {
        this.getLoadIcon().addClass('hide');
    }
};

Widget.prototype.getType = function () {
    return $(this.id).data('type');
};

Widget.prototype.setFooter = function (footerTxt) {
    this.getFooter().html(footerTxt);
};
