import { React, Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Card, Box, CardHeader } from '@mui/material';
import '../dash.css';
import BingMapsReact from 'bingmaps-react';
import keys from './Constants';

export default class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pushPin: {
                center: {
                    latitude: 55.9426831,
                    longitude: -3.1911645
                },
                options: {
                    title: "Darwin III",
                }
            }
        };
    }

    // async componentDidMount() {
    //     this.setState({
    //         pushPin: {
    //             center: {
    //                 latitude: this.state.pushPin.latitude - 1,
    //                 longitude: this.state.pushPin.longitude - 1
    //             },
    //             options: {
    //                 title: "Darwin III",
    //             }
    //         }
    //     });
    // }

    render() {
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
                        pushPins={[this.state.pushPin]}
                    />
                </Card>
            </div >
        )
    }
}
