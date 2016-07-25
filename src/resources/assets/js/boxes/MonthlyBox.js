class MonthlyBox extends StatisticsBox {
    boot() {
        $('input.stat_interval', this.context).datepicker({
            format: "yyyy/mm",
            startView: "months",
            minViewMode: "months",
            autoclose: true
        }).on('changeDate', () => this.fetchDatas() );

        this.fetchDatas();
    }

    fetchDatas() {
        let params,
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
        }).done((data) => this.updateWidgets(data) );
    }
}