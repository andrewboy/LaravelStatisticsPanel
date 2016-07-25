class MonthIntervalBox extends MonthlyBox {
    fetchDatas() {
        let params,
            dateFromParams = $('input.stat_interval.from', this.context).val().split("/"),
            dateToParams = $('input.stat_interval.to', this.context).val().split("/");

        this.setLoadIcons(true);

        params = {
            'from': {
                year: dateFromParams[0],
                month: dateFromParams[1]
            },
            'to': {
                year: dateToParams[0],
                month: dateToParams[1]
            }
        };

        $.ajax({
            type: 'GET',
            url: this.source,
            data: params
        }).done((data) => this.updateWidgets(data) );
    }
}