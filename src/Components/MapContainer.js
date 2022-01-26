import { React, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Card, Box, CardHeader } from '@mui/material';
import '../dash.css';
import mapsApiKey from './Constants';

const mapStyles = {
    position: 'fixed !important',
    height: '350px',
    width: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '300px' }}>
                <Card>
                    <CardHeader title="Live Location" style={{ textAlign: 'center' }} />
                    <Box>
                        <Map
                            className='map-cont'
                            google={this.props.google}
                            zoom={14}
                            style={mapStyles}
                            initialCenter={{
                                lat: 55.9433928,
                                lng: -3.1929832,
                            }}
                        />
                    </Box>
                </Card>
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: mapsApiKey
})(MapContainer); 