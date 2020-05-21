import React, { Component } from 'react';
import Head from 'next/head';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default class MyMap extends Component {
  render() {
    let iconMarker = L.icon({
      iconRetinaUrl: require('../utils/images/green-pin.png'),
      iconUrl: require('../utils/images/green-pin.png'),
      iconSize: [45, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 45], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [0, -43], // point from which the popup should open relative to the iconAnchor
    });
    return (
      <React.Fragment>
        <Head>
          <title>Fatur n Friend</title>
          <link
            rel='stylesheet'
            href='http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css'
          />
        </Head>
        <div>
          <Map
            className='MapStyle'
            center={[-1.182725, 106.88685]}
            zoom={4}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            style={{ height: '350px', borderRadius: '5px' }}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker icon={iconMarker} position={[-6.913416, 106.930019]}>
              <Popup minWidth={90}>
                <span>Deskripsi</span>
              </Popup>
            </Marker>
            <Marker icon={iconMarker} position={[-3.483677, 102.459935]}>
              <Popup minWidth={90}>
                <span>Deskripsi D</span>
              </Popup>
            </Marker>
            <Marker
              icon={iconMarker}
              icon={iconMarker}
              position={[-3.0646966, 104.7298834]}
            >
              <Popup minWidth={90}>
                <span>Deskripsi C</span>
              </Popup>
            </Marker>
            <Marker icon={iconMarker} position={[-2.1744305, 116.7717071]}>
              <Popup minWidth={90}>
                <span>Deskripsi B</span>
              </Popup>
            </Marker>
            <Marker icon={iconMarker} position={[-6.3678159, 106.8345207]}>
              <Popup minWidth={90}>
                <span>Deskripsi A</span>
              </Popup>
            </Marker>
            <Marker icon={iconMarker} position={[-7.277208, 112.588288]}>
              <Popup minWidth={90}>
                <span>Deskripsi</span>
              </Popup>
            </Marker>
            <Marker icon={iconMarker} position={[3.5898454, 98.4447023]}>
              <Popup minWidth={90}>
                <span>Deskripsi</span>
              </Popup>
            </Marker>
          </Map>
          <style jsx>{``}</style>
        </div>
      </React.Fragment>
    );
  }
}
