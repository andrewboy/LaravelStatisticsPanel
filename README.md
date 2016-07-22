# LaravelStatisticsPanel

readme

(function(stat_widgets){
    function StatDiaperGrid(id) {
        this.id = id;
    }

    StatDiaperGrid.prototype = Object.create(window.statistics_panel.widgets.grid.prototype);
    StatDiaperGrid.prototype.constructor = StatDiaperGrid;
    StatDiaperGrid.prototype.init = function() {};
    StatDiaperGrid.prototype.update = function(data) {
        this.setGrid(data.data);
        $('.summary', this.getFooter()).text(data.total);
    };

    stat_widgets.diaper_grid = StatDiaperGrid;
}(window.statistics_panel.stat_widgets));