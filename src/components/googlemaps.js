import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 300px; 
  height: 300px; 
  border-radius: 30%; 
  overflow: hidden; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  margin: 0 auto; /* Center the map horizontally */
  border: 5px solid #F5c04f;
`;

function MyMapIframe() {
  const location = "JLA, Pinewood, Florida";
  const zoomLevel = 10;

  return (
    <MapContainer>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
            location
          )}&zoom=${zoomLevel}`}
        allowFullScreen
        title="Google Map"
        style={{ border: 0 }}
      ></iframe>
    </MapContainer>
  );
}

export default MyMapIframe;
