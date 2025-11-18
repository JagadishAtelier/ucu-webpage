import React, { useState } from "react";
import { MapContainer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import indiaGeoJson from "./india.json";

export default function IndiamapComponent() {
  const [stateInfo, setStateInfo] = useState(null);

  const popupLocations = {
    Delhi: { title: "Delhi_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: delhi@example.com" },
    Maharashtra: { title: "Mumbai_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: mumbai@example.com" },
    "West Bengal": { title: "Kolkata_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: kolkata@example.com" },
    Karnataka: { title: "Bangalore_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: bangalore@example.com" },
    Telangana: { title: "Telangana_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: telangana@example.com" },
    Kerala: { title: "Kerala_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: kerala@example.com" },
    Assam: { title: "North-East_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: northeast@example.com" },
    Gujarat: { title: "Ahmedabad_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: ahmedabad@example.com" },
    "Tamil Nadu": { title: "Coimbatore_UCU_Chapter", contact: "Contact: +91-9876543210", email: "Email: coimbatore@example.com" },
  };

  // Assign colors dynamically
  const generateStateColors = (features) => {
    const colors = {};
    const total = features.length;
    features.forEach((feature, index) => {
      const stateName = feature.properties.ST_NM || feature.properties.NAME_1;
      const hue = Math.round((360 * index) / total);
      colors[stateName] = `hsl(${hue}, 70%, 60%)`;
    });
    return colors;
  };

  const stateColors = generateStateColors(indiaGeoJson.features);

  const stateStyle = (feature) => {
    const stateName = feature.properties.ST_NM || feature.properties.NAME_1;
    return {
      fillColor: stateColors[stateName] || "#74c476",
      weight: 1,
      color: "#238b45",
      fillOpacity: 0.7,
    };
  };

  const onEachState = (feature, layer) => {
    const stateName = feature.properties.ST_NM || feature.properties.NAME_1;

    layer.on({
      mouseover: (e) => {
        e.target.setStyle({ weight: 2, color: "white", fillOpacity: 0.9 });

        if (popupLocations[stateName]) {
          setStateInfo({
            ...popupLocations[stateName],
            latlng: e.latlng,
          });
        }
      },
      mouseout: (e) => {
        e.target.setStyle(stateStyle(feature));
        setStateInfo(null);
      },
      click: (e) => {
        if (popupLocations[stateName]) {
          const info = popupLocations[stateName];
          layer
            .bindPopup(`<b>${info.title}</b><br/>${info.contact}<br/>${info.email}`)
            .openPopup();
        }
      },
    });
  };

  return (
    <div className="captital-campus-content-sec mt-5">
      <div style={{ height: "730px", marginTop: "20px" }} className="d-flex gap-2">
      {/* Left: Map */}
      <div  className="col-lg-9 col-12">
        <MapContainer
          center={[23.0, 80.0]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          minZoom={5}
          maxZoom={7}
          maxBounds={[
            [6, 68],
            [38, 97],
          ]}
          maxBoundsViscosity={1.0}
        >
          <GeoJSON data={indiaGeoJson} style={stateStyle} onEachFeature={onEachState} />
          {stateInfo && (
            <Popup position={stateInfo.latlng}>
              <div>
                <h4>{stateInfo.title}</h4>
                <p>{stateInfo.contact}</p>
                <p>{stateInfo.email}</p>
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>

      <div
      className="col-3 d-lg-flex flex-column gap-3 justify-content-center mt-auto d-none"
        style={{
          borderRadius: "8px",
          padding: "15px",
          backgroundColor: "white",
          height: "fit-content",
          overflowY: "auto",
        }}
      >
        {Object.entries(popupLocations).map(([state, info]) => (
          <div
            key={state}
            className="d-flex gap-2 align-items-center"
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: stateColors[state] || "white",
              }}
            ></div>
            <div>
              <p className="mb-0">{info.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
