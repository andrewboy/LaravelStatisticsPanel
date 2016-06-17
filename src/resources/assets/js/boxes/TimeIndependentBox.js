function TimeIndependentBox(context, source) {
    this.context = context;
    this.source = source;

    StatisticsBox.apply(this, Array.prototype.slice.call(arguments));
}

TimeIndependentBox.prototype = new StatisticsBox();

TimeIndependentBox.prototype.boot = function () {
    this.fetchDatas();
};

TimeIndependentBox.prototype.fetchDatas = function () {
    var self = this;

    this.setLoadIcons(true);

    $.ajax({
        type: 'GET',
        url: self.source
    }).done(function (data) {
        self.updateWidgets(data);
    });
};