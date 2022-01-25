import React from 'react';
import { GoogleMap, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import {Marker} from '@react-google-maps/api'
import './Map.css'

import {useState} from 'react'
import { Link } from 'react-router-dom';

const containerStyle = {
  width: "100%",
  height: "100%",
};



const Maps = ({ apiKey, cars }) => {

  const [selectedCoordinates, setSelectedCoordinates] = useState(null)

  const getCenter = () => {
    let lat = 0;
    let lng = 0;
    for(let i=0; i<cars.length; i++) {
      lat = lat + parseFloat(cars[i].latitude);
      lng = lng + parseFloat(cars[i].longitude);
    }
    lat = lat/cars.length;
    lng = lng/cars.length;
    return {"lat" : lat, "lng": lng}
  }

  const center = getCenter();

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
          zoom={10}
        >
        {cars.map((ele) => (
          <Marker
          key={`map-${ele.id}`}
          position={{
            lat: parseFloat(ele.latitude),
            lng: parseFloat(ele.longitude)
          }}
          onClick={()=>{
            setSelectedCoordinates(ele)
          }}
          />
        ))}
        {selectedCoordinates && (
          <InfoWindow
           onCloseClick={() => {
            setSelectedCoordinates(null);
           }}
           position={{
             lat: parseFloat(selectedCoordinates.latitude),
             lng: parseFloat(selectedCoordinates.longitude)
           }}
           >
            <Link to={`/car/${selectedCoordinates.id}`}>
              <div className='image-title-map-container' style={{backgroundImage: `url('${selectedCoordinates.Images[0].imageURL}')` }}>
                <div className="image-title-map">
                  ${selectedCoordinates.price}
                </div>
              </div>
            </Link>
           </InfoWindow>
        )}
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
