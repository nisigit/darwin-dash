import { React, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Card, Box, CardHeader } from '@mui/material';
import '../dash.css';

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
                    <CardHeader title="Darwin III's Live Location" />
                    <Box>
                        <Map
                            className='map-cont'
                            google={this.props.google}
                            zoom={14}
                            style={mapStyles}
                            initialCenter={{
                                lat: -1.2884,
                                lng: 36.8233
                            }}
                        />
                    </Box>
                </Card>
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBPFqii8RvtBWALVC3744LO24OAnWbDnOA'
})(MapContainer); 