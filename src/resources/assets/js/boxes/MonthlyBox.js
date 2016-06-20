function MonthlyBox(context, source) {
    //this.context = context;
    //this.source = source;

    StatisticsBox.apply(this, Array.prototype.slice.call(arguments));
}

MonthlyBox.prototype.boot = function () {
    var self = this;

    $('input.stat_interval', this.context).datepicker({
        format: "yyyy/mm",
        startView: "months",
        minViewMode: "months",
        autoclose: true
    }).on('changeDate', function () {
        self.fetchDatas();
    });

    this.fetchDatas();
};

//MonthlyBox.prototype = new StatisticsBox();

MonthlyBox.inheritsFrom(StatisticsBox);

MonthlyBox.prototype.fetchDatas = function () {
    var self = this,
        params,
        dateFromParams = $('input.stat_interval.from', this.context).val().split("/");

    this.setLoadIcons(true);

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