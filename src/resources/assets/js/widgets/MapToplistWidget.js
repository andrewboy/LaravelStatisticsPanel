function MapToplistWidget(id, options) {
    GridWidget.apply(this, Array.prototype.slice.call(arguments));

    this.markerClusterer = null;
    var settings = $.extend({}, {}, options || {});

    var mapStyle = [{
            "featureType":"landscape",
            "stylers":[
                {"saturation":-100},
                {"lightness":65},
                {"visibility":"on"}
            ]
        },{
            "featureType":"poi",
            "stylers":[
                {"saturation":-100},
                {"lightness":51},
                {"visibility":"simplified"}
            ]
        },{
            "featureType":"road.highway",
            "stylers":[
                {"saturation":-100},
                {"visibility":"simplified"}
            ]
        },{
            "featureType":"road.arterial",
            "stylers":[
                {"saturation":-100},
                {"lightness":30},
                {"visibility":"on"}
            ]
        },{
            "featureType":"road.local",
            "stylers":[
                {"saturation":-100},
                {"lightness":40},
                {"visibility":"on"}
            ]
        },{
            "featureType":"transit",
            "stylers":[
                {"saturation":-100},
                {"visibility":"simplified"}
            ]
        },{
            "featureType":"administrative.province",
            "stylers":[
                {"visibility":"off"}
            ]
        },{
            "featureType":"water",
            "elementType":"labels",
            "stylers":[
                {"visibility":"on"},
                {"lightness":-25},
                {"saturation":-100}
            ]
        },{
            "featureType":"water",
            "elementType":"geometry",
            "stylers":[
                {"hue":"#ffff00"},
                {"lightness":-25},
                {"saturation":-97}
            ]
        }];

    var mapOptions = {
        zoom: 6,
        center: new google.maps.LatLng(47.5011151657, 19.0531965145),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: mapStyle
    };

    this.map = new google.maps.Map($('.map', this.id)[0], mapOptions);
}

MapToplistWidget.prototype = new GridWidget();

MapToplistWidget.prototype.getGridBody = function () {
    return $('.toplist', this.id);
};

MapToplistWidget.prototype.setMultiMap = function (data) {
    var i,
        max,
        markers = [];

    if (this.markerClusterer) {
        this.markerClusterer.clearMarkers();
    }

    if (data.map) {
        for (i = 0, max = data.map.length; i < max; i += 1) {
            var latLng = new google.maps.LatLng(data.map[i].lat, data.map[i].lng);
            var marker = new google.maps.Marker({
                position: latLng,
                title: data.map[i].name +': '+ data.map[i].value,
            });

            markers.push(marker);
        }

        this.markerClusterer = new MarkerClusterer(this.map, mar, {imagePath: '/images/vendor/js-marker-clusterer/m'});

        this.markerClusterer.setCalculator(function(markers, numStyles) {
            var val = 0,
                index = 0,
                dv;

            for (var m = 0, max = markers.length; m < max; m++) {
                val += Number(markers[m].getTitle().match(/(\d+)$/g)[0]);
            }

            dv = val;

            while (dv !== 0) {
                dv = parseInt(dv / 10, 10);
                index++;
            }

            index = Math.min(index, numStyles);

            return {
                text: val,
                index: index
            };
        });
    }

    if (data.toplist) {
        this.setGrid(data.toplist);
    }
};