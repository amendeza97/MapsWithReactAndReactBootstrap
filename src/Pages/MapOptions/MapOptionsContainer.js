import React from 'react';

import MapOptions from './MapOptions';
import openLayersImage from '../../assets/openLayers.png';
import leafletImage from '../../assets/leaflet.png';
import mapboxImage from '../../assets/mapbox.png';
import cartoImage from '../../assets/carto.png';

function MapOptionsContainer() {

    const maps = [
        { title: 'Leaflet', image: leafletImage, info: 'Leaflet is the leading open-source JS library for mobile-friendly interactive maps', link: '', docUrl: 'https://leafletjs.com/examples.html' },
        { title: 'Mapbox', image: mapboxImage, info: 'Mapbox is the location data platform for mobile and web applications.', link: '', docUrl: 'https://docs.mapbox.com/help/tutorials/#web-apps' },
        { title: 'OpenLayers', image: openLayersImage, info: 'OpenLayers makes it easy to put a dynamic map in any web page.', link: '', docUrl: 'https://openlayers.org/en/latest/doc/tutorials/bundle.html' },
        { title: 'Carto', image: cartoImage, info: `Whether it's more efficient delivery routes, strategic store placements`, link: '', docUrl: 'https://carto.com/developers/carto-js/' }
    ];

    return (
        <MapOptions mapsOptions={maps} />
    );

}

export default MapOptionsContainer;
