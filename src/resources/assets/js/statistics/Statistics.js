/*jslint browser: true*/
/*global jQuery*/
var Statistics = (function ($) {
    "use strict";

    var withSingleFetch = function () {
            this.fetchDatas = function () {
                var self = this;
                $.ajax({
                    type: 'GET',
                    url: self.source
                }).done(function (data) {
                    self.updateWidgets(data);
                });
            };
        },
        withMonthDatePicker = function () {
            this.fetchDatas = function () {
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
        },
        withMonthlyFetch = function () {
            this.onDateChange = function () {
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
        },
        withMonthIntervalFetch = function () {
            this.onDateChange = function () {
                var self = this, i, params,
                    dateFromParams = $('input.stat_interval.from', this.context).val().split("/"),
                    dateToParams = $('input.stat_interval.to', this.context).val().split("/");

                for (i in this.widgetContainer) {
                    if (this.widgetContainer.hasOwnProperty(i)) {
                        this.widgetContainer[i].setLoadIcon(true);
                    }
                }

                params = {
                    from: {
                        year: dateFromParams[0],
                        month: dateFromParams[1]
                    },
                    to: {
                        year: dateToParams[0],
                        month: dateToParams[1]
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
        },
        withStatisticsBox = function () {
            this.init = function () {
                var obj = this;
                $('.stat-widget', this.context).each(function (i, item) {
                    obj.setWidget($(item));
                });

                this.boot();
            };

            this.boot = function () {
                var i;

                for (i in this.widgetContainer) {
                    if (this.widgetContainer.hasOwnProperty(i)) {
                        this.widgetContainer[i].setLoadIcon(true);
                    }
                }

                this.fetchDatas();
            };

            this.updateWidgets = function (data) {
                var id;

                for (id in data) {
                    if (data.hasOwnProperty(id) && this.widgetContainer.hasOwnProperty(id)) {
                        this.widgetTypes[this.widgetContainer[id].getType()].update(this.widgetContainer[id], data[id]);
                        this.widgetContainer[id].setLoadIcon(false);
                    }
                }
            };

            this.setWidget = function ($item) {
                var id = $item.data('statId');

                this.widgetContainer[id] = this.widgetTypes[$item.data('type')].init($item);
            };
        },
        SingleStatistics = function (context, source, widgetTypes) {
            this.widgetContainer = {};
            this.context = context;
            this.source = source;
            this.widgetTypes = widgetTypes;
        },
        MonthlyStatistics = function (context, source, widgetTypes) {
            this.widgetContainer = {};
            this.context = context;
            this.source = source;
            this.widgetTypes = widgetTypes;
        },
        MonthIntervalStatistics = function (context, source, widgetTypes) {
            this.widgetContainer = {};
            this.context = context;
            this.source = source;
            this.widgetTypes = widgetTypes;
        };

    //SingleStatistics
    withSingleFetch.call(SingleStatistics.prototype);
    withStatisticsBox.call(SingleStatistics.prototype);

    //MonthlyStatistics
    withMonthDatePicker.call(MonthlyStatistics.prototype);
    withMonthlyFetch.call(MonthlyStatistics.prototype);
    withStatisticsBox.call(MonthlyStatistics.prototype);

    //MonthIntervalStatistics
    withMonthDatePicker.call(MonthIntervalStatistics.prototype);
    withMonthIntervalFetch.call(MonthIntervalStatistics.prototype);
    withStatisticsBox.call(MonthIntervalStatistics.prototype);

    return {
        'SingleStatistics': SingleStatistics,
        'MonthlyStatistics': MonthlyStatistics,
        'MonthIntervalStatistics': MonthIntervalStatistics
    };
}(jQuery));