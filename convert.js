$(function convert() {
    "use strict;"

    var self = this;

    self.getData = function () {
        return $.getJSON('location.json', function (data) {
            console.log(data);
        });
    };

    self.convertToGeoJsonData = function (geometryType, coordinateValue) {

        self.getData().done(function (data) {
            var filteredData = data.filter(function (item) {
                return !!item.Latitude && !! item.Longitude;
            });

            thisData = filteredData;

            $.each(filteredData, function (index, value) {

                var geoJsonData = {
                    "type": "Feature",
                    "geometry": {
                        "type": geometryType,
                        "coordinates": coordinateValue
                    },
                    "properties": { "TrackingNumber":  value.TrackingNumber }
                };

            });

            $.each(filteredData, function (index, value) {

                markers.push(L.Polyline.fromEncoded(value.GroundGeoCode, 6).getLatLngs());

            });

        });
    };

});