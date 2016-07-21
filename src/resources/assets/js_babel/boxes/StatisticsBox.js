import $ from 'jquery';
import jQuery from 'jquery';

export class StatisticsBox {
    constructor(context, source) {
        this.context = context;
        this.source = source;
    }

    public init() {
        $('.stat-widget', this.context).each( (i, item) => obj.setWidget($(item) ));
        this.boot();
    }

    public boot() {
        this.fetchDatas();
    }

    public setLoadIcons(isLoading: boolean) :void {
        $('.stat-widget', this.context).each((i, item) => $(item).data('widget').setLoadIcon(isLoading) );
    }

    public updateWidgets(data) {
        var id, statWidgets = $('.stat-widget', this.context);

        for (id in data) {
            var $stat = statWidgets.filter('[data-stat-id="' + id + '"]');

            if ($stat.length > 0) {
                $stat.data('widget').update(data[id]);
                $stat.data('widget').setLoadIcon(false);
            }
        }
    }

    public setWidget($item) {
        var widget = new window.statistics_panel.stat_widgets[$item.data('type')]($item);
        widget.init($item);

        $item.data('widget', widget);
    }

    public fetchDatas() {
        this.setLoadIcons(true);

        $.ajax({
            type: 'GET',
            url: this.source
        }).done((data) => this.updateWidgets(data) );
    }
}