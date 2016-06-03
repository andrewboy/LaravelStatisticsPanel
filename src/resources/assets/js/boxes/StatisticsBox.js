function StatisticsBox(context, source) {
    this.context = context;
    this.source = source;
}

StatisticsBox.prototype.init = function () {
    var obj = this;
    $('.stat-widget', this.context).each(function (i, item) {
        obj.setWidget($(item));
    });

    this.boot();
};

StatisticsBox.prototype.boot = function () {
    $('.stat-widget', this.context).each(function (i, item) {
        $(item).data('widget').setLoadIcon(true);
    });

    this.fetchDatas();
};

StatisticsBox.prototype.updateWidgets = function (data) {
    var id,
        statWidgets = $('.stat-widget', this.context);

    for (id in data) {
        var $stat = statWidgets.filter('[data-stat-id="' + id + '"]');

        if ($stat.length > 0) {
            $stat.data('widget').update(data[id]);
            $stat.data('widget').setLoadIcon(false);
        }
    }
};

StatisticsBox.prototype.setWidget = function ($item) {
    var id = $item.data('statId');

    var widget = new window.statistics_panel.stat_widgets[$item.data('type')]($item);
    widget.init($item);

    $item.data('widget', widget);
};

StatisticsBox.prototype.fetchDatas = function () {
    var self = this;
    $.ajax({
        type: 'GET',
        url: self.source
    }).done(function (data) {
        self.updateWidgets(data);
    });
};