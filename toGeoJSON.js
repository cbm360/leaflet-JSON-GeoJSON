/**
 * Created by Camron on 2/28/2015.
 */


$(function () {

    L.toGeoJSON = (function () {
        //An empty array to hold GeoJSON data
        var geoJsonData = [];

        //Method to be revealed for retrieving data
        function getData(url) {
            return $.getJSON(url);
        }

        //Method to be revealed for converting JSON to GeoJSON
        function convert(url, geometryType) {

            //Use promise from getData
            return getData(url).done(function (data) {

                //Filter to only use objects with Latitude and Longitude
                var filteredData = data.filter(function (item) {
                    return !!item.Latitude && !! item.Longitude;
                });

                //For each object create a new GeoJSON object
                $.each(filteredData, function (index, value, array) {
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
        }

        function empty() {
            geoJsonData = [];
            L.toGeoJSON.geoJsonData = geoJsonData;
        }

        //Reveal methods and GeoJSON data
        return {
            getData: getData,
            convert: convert,
            empty: empty,
            geoJsonData: geoJsonData
        };

    }());

});