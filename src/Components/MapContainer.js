import { React, Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Card, Box, CardHeader } from '@mui/material';
import '../dash.css';
import BingMapsReact from 'bingmaps-react';
import keys from './Constants';

const mapStyles = {
    position: 'fixed !important',
    height: '350px',
    width: '100%'
};

let pushPin = {
    center: {
        latitude: 55.9426831,
        longitude: -3.1911645
    },
    options: {
        title: "Darwin III",
    },
}

export default () => {
    return (
        <div style={{ width: '100%', minHeight: '400px' }}>
            <Card>
                <CardHeader title="Live Location" style={{ textAlign: 'center' }} />
                <BingMapsReact
                    bingMapsKey={keys.bingMapsKey}
                    height="500px"
                    mapOptions={{
                        navigationBarMode: "square",
                    }}
                    viewOptions={{
                        center: {
                            latitude: 55.9426831,
                            longitude: -3.1911645
                        },
                        zoom: 15,
                        mapTypeId: 'Road'
                    }}
                    pushPins={[pushPin]}
                />
            </Card>
        </div >
    );
}