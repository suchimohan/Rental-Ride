import React from 'react';
import { GoogleMap, InfoBox, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import {Marker} from '@react-google-maps/api'
import './Map.css'

import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';

const containerStyle = {
  width: "100%",
  height: "100%",
};



const Maps = ({ apiKey, cars }) => {

  const [cordinates, setCordinates] = useState(null)

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

  useEffect(()=>{
    const listener = e => {
      if(e.key === "Escape"){
        setCordinates(null);
      }
    }
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  },[]);


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const options = { closeBoxURL: '', enableEventPropagation: true };

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
            setCordinates(ele)
          }}
          />
        ))}
        {cordinates && (
          <InfoWindow
           onCloseClick={() => {
            setCordinates(null);
           }}
           position={{
             lat: parseFloat(cordinates.latitude),
             lng: parseFloat(cordinates.longitude)
           }}
           >
             <div className='image-title-map-container' style={{backgroundImage: `url('${cordinates.Images[0].imageURL}')`}}>
              <div className="image-title-map">
                ${cordinates.price}
              </div>
             </div>
           </InfoWindow>
        )}
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
