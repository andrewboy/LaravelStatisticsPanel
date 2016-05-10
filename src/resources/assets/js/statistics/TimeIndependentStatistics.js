function TimeIndependentStatistics(context, source, widgetTypes) {
    this.widgetContainer = {};
    this.context = context;
    this.source = source;
    this.widgetTypes = widgetTypes;
}

TimeIndependentStatistics.prototype.init = function () {
    var obj = this;
    $('.stat-widget', this.context).each(function (i, item) {
        obj.setWidget($(item));
    });

    this.boot();
};

TimeIndependentStatistics.prototype.boot = function () {
    $('.stat-widget', this.context).each(function (i, item) {
        $(item).data('widget').setLoadIcon(true);
    });

    this.fetchDatas();
};

TimeIndependentStatistics.prototype.updateWidgets = function (data) {
    var id,
        statWidgets = $('.stat-widget', this.context);

    for (id in data) {
        var $stat = statWidgets.filter('[data-stat-id="' + id + '"]');

        if ($stat.length > 0) {
            $stat.data('widget').update(this.widgetContainer[id], data[id]);
            $stat.data('widget').setLoadIcon(false);
        }
    }
};

TimeIndependentStatistics.prototype.setWidget = function ($item) {
    var id = $item.data('statId');

    $item.data('widget', this.widgetTypes[$item.data('type')].init($item));
};

TimeIndependentStatistics.prototype.fetchDatas = function () {
    var self = this;
    $.ajax({
        type: 'GET',
        url: self.source
    }).done(function (data) {
        self.updateWidgets(data);
    });
};
