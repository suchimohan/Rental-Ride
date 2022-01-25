import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {Marker} from '@react-google-maps/api'

const containerStyle = {
  width: '500px',
  height: '400px',
};


const SmallMaps = ({ apiKey, car }) => {

    const center = {
        lat: parseFloat(car.latitude),
        lng: parseFloat(car.longitude),
      };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          id="marker-example"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
        <Marker
        position= {{
            lat: parseFloat(car.latitude),
            lng: parseFloat(car.longitude),
        }}
        />
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(SmallMaps);
