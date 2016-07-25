class GridWidget extends Widget {
    getGridBody() {
        return $('.box-body', this.id);
    }

    setGrid(data) {
        let gridBodyHtml = '', i, maxRow, j, maxHeadLen, k, maxBodyLen, c, maxCol;

        gridBodyHtml += '<div class="row">';

        if (data.datasets) {
            for (i = 0, maxRow = data.datasets.length; i < maxRow; i += 1) {
                gridBodyHtml += '<div class="col-md-' +  (12 / data.datasets.length) + '">'+
                    '<table class="table no-margin table-striped table-hover table-bordered">';

                //HEAD
                gridBodyHtml += '<thead><tr>';
                for (j = 0, maxHeadLen = data.labels.length; j < maxHeadLen; j += 1) {
                    gridBodyHtml += '<th>' + data.labels[j] + '</th>';
                }
                gridBodyHtml += '</tr></thead>';

                //BODY
                gridBodyHtml += '<tbody>';
                for (k = 0, maxBodyLen = data.datasets[i].length; k < maxBodyLen; k += 1) {
                    gridBodyHtml += '<tr>';
                    for (c = 0, maxCol = maxHeadLen; c < maxCol; c += 1) {
                        gridBodyHtml += '<td>' + data.datasets[i][k][c] + '</td>';
                    }
                    gridBodyHtml += '</tr>';
                }
                gridBodyHtml += '</tbody>';

                gridBodyHtml += '</table></div>';
            }
        } else {
            gridBodyHtml += '<div class="col-md-12 text-center margin">No data to display</div>';
        }

        gridBodyHtml += '</div>';

        this.getGridBody().html(gridBodyHtml);
    }
}