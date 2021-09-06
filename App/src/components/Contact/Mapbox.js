import React, { useState } from 'react';
import MapGL, {
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl,
    Marker
} from 'react-map-gl';

const TOKEN = process.env.REACT_APP_MAP_API_KEY

const ICON = "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z";

const geolocateStyle = {
    top: 0,
    left: 0,
    padding: '10px'
};

const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: '10px'
};

const navStyle = {
    top: 72,
    left: 0,
    padding: '10px'
};

const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: '10px'
};

const pinStyle = {
    cursor: "pointer",
    fill: "#d00",
    stroke: "none"
};


const MapBox = () => {
    const [viewport, setViewport] = useState({
        latitude: -37.816218,
        longitude: 144.964068,
        zoom: 12,
        bearing: 0,
        pitch: 0
    });

    return (
        <>
            <MapGL
                {...viewport}
                width="800px"
                height="400px"
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={setViewport}
                mapboxApiAccessToken={TOKEN}
            >

                <Marker longitude={144.9622} latitude={-37.8168}>
                    <svg
                        height={50}
                        viewBox="0 0 24 24"
                        style={{
                            ...pinStyle,
                            transform: `translate(${-25}px,${-25}px)`
                        }}
                    >
                        <path d={ICON} />
                    </svg>
                </Marker>

                <GeolocateControl style={geolocateStyle} />
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navStyle} />
                <ScaleControl style={scaleControlStyle} />
            </MapGL>
        </>
    );
}



export default MapBox