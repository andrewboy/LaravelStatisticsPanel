class ToplistWidget extends Widget {
    constructor(id, colors) {
        super(id);
        this.colors = colors;
    }

    getGridBody() {
        return $('.box-body', this.id);
    }

    setGrid(data) {
        var gridBodyHtml = '', i, maxRow, j, maxCol;

        gridBodyHtml += '<div class="row">';

        if (data.datasets) {
            for (i = 0, maxRow = data.datasets.length; i < maxRow; i += 1) {
                gridBodyHtml += '<div class="col-md-' +  (12 / data.datasets.length) + '"><div class="progress-group">';

                for (j = 0, maxCol = data.datasets[i].length; j < maxCol; j += 1) {
                    gridBodyHtml += '<span class="progress-text">' + data.datasets[i][j][0] + '</span>' +
                        '<span class="progress-number"><b>' + data.datasets[i][j][1] + '</b></span>' +

                        '<div class="progress sm">' +
                        '<div class="progress-bar bg-' + this.colors[j].color_name + '" style="width: ' +
                        (100 * (data.datasets[i][j][1] / data.datasets[i][0][1])) + '%"></div>' +
                        '</div>';
                }

                gridBodyHtml += '</div></div>';
            }
        } else {
            gridBodyHtml += '<div class="col-md-12 text-center margin">No data to display</div>';
        }

        gridBodyHtml += '</div>';

        this.getGridBody().html(gridBodyHtml);
    }
}