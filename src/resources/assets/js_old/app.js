/*jslint browser: true*/
/*global jQuery*/
/*global WidgetTypeHandler*/
(function ($, WidgetTypeHandler) {
    "use strict";

    $(function () {
        //GA STATISTICS
        $('#ga_statistics_monthly').monthlyStatistics(
            '/api/admin/ga-statistics/get-monthly-stats',
            WidgetTypeHandler
        );
    });
}(jQuery, WidgetTypeHandler));