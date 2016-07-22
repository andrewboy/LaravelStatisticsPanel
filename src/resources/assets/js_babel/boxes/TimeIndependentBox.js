class TimeIndependentBox extends StatisticsBox {
    boot() {
        this.fetchDatas();
    }

    fetchDatas() {
        this.setLoadIcons(true);

        $.ajax({
            type: 'GET',
            url: self.source
        }).done((data) => this.updateWidgets(data) );
    }
}