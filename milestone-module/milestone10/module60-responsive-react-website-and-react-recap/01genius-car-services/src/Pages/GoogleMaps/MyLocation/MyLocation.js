import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    // width: '400px',
    width: '100vw',
    // height: '400px'
    height: '100vh'
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// Location of Sylhet
const center = {
    lat: 24.8998373,
    lng: 91.8259622
};

function MyComponent() {
    return (
        <LoadScript
            //   googleMapsApiKey="YOUR_API_KEY"
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                // zoom={10}
                zoom={16}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {/* <></> */}
                <Marker
                    // onLoad={onLoad} // We can say anything using javaScript function;
                    // position={position} // Replace by center - center (position) is declared above
                    position={center}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)