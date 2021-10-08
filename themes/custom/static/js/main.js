const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({
                url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([13.4992454, 52.5137939]),
        zoom: 10
    })
});

const popup = new ol.Overlay({
    element: document.getElementById('popup'),
    position: ol.proj.fromLonLat([13.4992454, 52.5137939]),
    positioning: 'bottom-left'
})

map.addOverlay(popup)