/*jslint browser: true*/
/*global jQuery*/
/*global Statistics*/
(function ($, Statistics) {
    "use strict";

    $.fn.singleStatistics = function (url, widgetTypes) {
        if ($(this).length > 0) {
            var stat = new Statistics.SingleStatistics(
                    $(this),
                    url,
                    widgetTypes
                );

            stat.init();
        }
    };
}(jQuery, Statistics));

(function ($, Statistics) {
    "use strict";

    $.fn.monthlyStatistics = function (url, widgetTypes) {
        if ($(this).length > 0) {
            var stat = new Statistics.MonthlyStatistics(
                    $(this),
                    url,
                    widgetTypes
                );

            stat.init();
        }
    };
}(jQuery, Statistics));

(function ($, Statistics) {
    "use strict";

    $.fn.monthIntervalStatistics = function (url, widgetTypes) {
        if ($(this).length > 0) {
            var stat = new Statistics.MonthIntervalStatistics(
                    $(this),
                    url,
                    widgetTypes
                );

            stat.init();
        }
    };
}(jQuery, Statistics));