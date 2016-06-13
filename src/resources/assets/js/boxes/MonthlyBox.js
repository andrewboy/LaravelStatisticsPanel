function MonthlyBox(context, source) {
    this.context = context;
    this.source = source;

    StatisticsBox.apply(this, Array.prototype.slice.call(arguments));

    var self = this;

    $('input.stat_interval', this.context).datepicker({
        format: "yyyy/mm",
        startView: "months",
        minViewMode: "months",
        autoclose: true
    }).on('changeDate', function () {
        self.fetchDatas();
    });
}

MonthlyBox.prototype = new StatisticsBox();

StatisticsBox.prototype.fetchDatas = function () {
    //var self = this;
    //$.ajax({
    //    type: 'GET',
    //    url: self.source
    //}).done(function (data) {
    //    self.updateWidgets(data);
    //});

    //==============

    //var self = this;
    //
    //$('input.stat_interval', this.context).datepicker({
    //    format: "yyyy/mm",
    //    startView: "months",
    //    minViewMode: "months",
    //    autoclose: true
    //}).on('changeDate', function () {
    //    self.onDateChange();
    //});
    //
    //$('input.stat_interval', this.context).first().trigger('changeDate');

    var self = this, i, params,
        dateFromParams = $('input.stat_interval.from', this.context).val().split("/");

    for (i in this.widgetContainer) {
        if (this.widgetContainer.hasOwnProperty(i)) {
            this.widgetContainer[i].setLoadIcon(true);
        }
    }

    params = {
        'in': {
            year: dateFromParams[0],
            month: dateFromParams[1]
        }
    };

    $.ajax({
        type: 'GET',
        url: this.source,
        data: params
    }).done(function (data) {
        self.updateWidgets(data);
    });
};