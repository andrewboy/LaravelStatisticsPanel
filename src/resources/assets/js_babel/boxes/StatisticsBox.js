class StatisticsBox {
    constructor(context, source) {
        this.context = context;
        this.source = source;
    }

    init() {
        $('.stat-widget', this.context).each( (i, item) => this.setWidget($(item) ));
        this.boot();
    }

    boot() {
        this.fetchDatas();
    }

    setLoadIcons(isLoading) {
        $('.stat-widget', this.context).each((i, item) => $(item).data('widget').setLoadIcon(isLoading) );
    }

    updateWidgets(data) {
        var id, statWidgets = $('.stat-widget', this.context);

        for (id in data) {
            var $stat = statWidgets.filter('[data-stat-id="' + id + '"]');

            if ($stat.length > 0) {
                $stat.data('widget').update(data[id]);
                $stat.data('widget').setLoadIcon(false);
            }
        }
    }

    setWidget($item) {
        var widget = new window.statistics_panel.stat_widgets[$item.data('type')]($item);
        widget.init($item);

        $item.data('widget', widget);
    }

    fetchDatas() {
        this.setLoadIcons(true);

        $.ajax({
            type: 'GET',
            url: this.source
        }).done((data) => this.updateWidgets(data) );
    }
}