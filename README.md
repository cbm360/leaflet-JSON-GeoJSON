# leaflet-JSON-GeoJSON 
=========

This can be used to create GeoJSON data from a JSON data source for use with Leaflet.  The use case this is if
you are utilizing API data that is returns JSON containing valid Latitude and Longitude properties, and would like
to create a leaflet GeoJSON layer.

Required Resources
------------------
External Libraries
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
```

Project Files
```
<script src="toGeoJSON.js"></script>
```

Creating the data
-----------------
You need JSON data that contains valid Latitude and Longitude properties.

Sample Format:
```
{
      "Job": "Location1",
      "Address": "Denver, CO",
      "Latitude": 39.7392,
      "Longitude": -104.9903
  },
  {
      "Job": "Location2",
      "Address": "MEMPHIS, TN",
      "Latitude": 35.1174,
      "Longitude": -89.9711
  },
  {
      "Job": "Location4",
      "Address": "ORLANDO, FL",
      "Latitude": 28.4158,
      "Longitude": -81.2989
  },
  {
      "Job": "Location5",
      "Address": "DALLAS, TX",
      "Latitude": 32.7767,
      "Longitude": -96.7970
  },
  {
      "Job": "Location6",
      "Address": "CHICAGO, TN",
      "Latitude": 41.8369,
      "Longitude": -87.6847
  }
```

Options
-------
Get Data 


```
L.toGeoJSON.getData(url);
```

Convert JSON to GeoJSON


```
L.toGeoJSON.getData(url, type <POINT, LINESTRING...>);
```

Return GeoJSON


```
L.toGeoJSON.geoJsonData;
```

Helpful Resources
-----------------
http://leafletjs.com/reference.html#geojson


http://leafletjs.com/examples/geojson.html


http://geojson.org/