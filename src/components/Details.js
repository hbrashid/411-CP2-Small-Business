import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

const Details = ({ businesses, match }) => {
  const id = parseInt(match.params.id);
  const business = businesses.find((entry) => entry.id === id);
  const position = [business.coordsLat, business.coordsLng]

  return (
    <Container
      style={{
        margin: "100px 80px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h3" component="h1">
        {business.name}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {business.description}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {business.address}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom style={{}}>
        {business.hours}
      </Typography>
      <Map
        center={position}
        zoom={13}
        style={{ width: "40%", height: "400px" }}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
          <Marker
            position={position}>
                <Popup>
                    {business.name}
                </Popup>
            </Marker>
      </Map>
        
    </Container>
  );
};

export default Details;
