/**
 * Created by Camron on 2/28/2015.
 */

$(function () {

    L.toGeoJSON = (function () {
        var self = this,
            geoJsonData = [];

        self.getData = function (url) {
            return $.getJSON(url, function (data) {});
        };

        self.convert = function (url, geometryType) {

            return self.getData(url).done(function (data) {
                var filteredData = data.filter(function (item) {
                    return !!item.Latitude && !! item.Longitude;
                });

                $.each(filteredData, function (index, value) {

                    geoJsonData.push({
                        "type": "Feature",
                        "geometry": {
                            "type": geometryType,
                            "coordinates": [value.Longitude, value.Latitude]
                        },
                        "properties": value
                    });

                });
            });
        };

        return {
            getData: self.getData,
            convert: self.convert,
            geoJsonData: geoJsonData
        };

    }());

});