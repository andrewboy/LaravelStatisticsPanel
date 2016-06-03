function MonthlyBox(context, source) {
    this.context = context;
    this.source = source;

    window.statistics_panel.boxes.StatisticsBox.apply(this, Array.prototype.slice.call(arguments));
}

MonthlyBox.prototype = new  window.statistics_panel.boxes.StatisticsBox();

StatisticsBox.prototype.fetchDatas = function () {
    //var self = this;
    //$.ajax({
    //    type: 'GET',
    //    url: self.source
    //}).done(function (data) {
    //    self.updateWidgets(data);
    //});

    var self = this;

    $('input.stat_interval', this.context).datepicker({
        format: "yyyy/mm",
        startView: "months",
        minViewMode: "months",
        autoclose: true
    }).on('changeDate', function () {
        self.onDateChange();
    });

    $('input.stat_interval', this.context).first().trigger('changeDate');
};