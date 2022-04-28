import React, { Component } from 'react';
import './dash.css';
import { Container, Grid, Box, Card, Typography, CardContent, CardHeader } from '@mui/material';
import VelocityBox from './Components/VelocityBox';
import AccelerationBox from './Components/AccelerationBox';
import AltitudeBox from './Components/AltitudeBox';
import FlightTimeBox from './Components/FlightTimeBox';
import PressureBox from './Components/PressureBox';
import Milestones from './Components/Milestones';
import ResetTimeBox from './Components/ResetTimeBox';
import TemperatureBox from './Components/TemperatureBox';
import logo from './endeavour-logo.png';
import Map from './Components/Map';

//------------ Dashboard Component Code ---------
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVelocity: 0,
            currentAcceleration: 0,
            currentAltitude: 0,
            currentPressure: 0,
            currentTemperature: 0,
            drogueParDeploy: true,
            mainParDeploy: false,
            flightTime: 0,
            timeStamp: Date.now(),
            timeSinceUpdate: 0,
            latitude: 55.9426804,
            longitude: - 3.1912244
        };
    }

    async componentDidMount() {
        while (true) {
            const axios = require('axios');
            try {
                const response = await axios.get('https://gvnqmmlrsl.execute-api.us-west-2.amazonaws.com/AlphaStage/groundstation?hashKey=RaspberryPi');
                const piData = response.data.Items[0].PiData.M;

                this.setState({
                    ...this.state,
                    currentVelocity: piData.velocity.N,
                    currentAcceleration: piData.acceleration.N,
                    currentAltitude: piData.altitude.N,
                    currentPressure: piData.pressure.N,
                    currentTemperature: piData.temperature.N,
                    drogueParDeploy: piData.drogueParachuteDeployed.S !== "No",
                    mainParDeploy: piData.mainParachuteDeployed.S !== "No",
                    flightTime: piData.flighttime.S,
                    timeSinceUpdate: Date.now() - this.state.timeStamp,
                    timeStamp: Date.now(),
                    latitude: this.state.latitude - 0.0005,
                    longitude: this.state.longitude + 0.00005,
                });
                // await new Promise(r => setTimeout(r, 300));
            } catch (err) {
                console.log("Error: " + err);
            }
        }

    }

    render() {
        return (
            <div className='dash-container'>
                <div className='logo'>
                    <a target='_blank' rel="noreferrer" href='https://endeavourockets.com' alt="endeavour logo"><img src={logo}></img></a>
                </div>
                <Container maxWidth="xl">
                    <Box sx={{ pb: 5 }}>
                        <Typography variant="h4" className='dash-head' style={{ textAlign: 'center', color: '#fff' }}>
                            Hi, Welcome to the Darwin III Dashboard
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <VelocityBox
                                currentVelocity={this.state.currentVelocity}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AccelerationBox
                                currentAcceleration={this.state.currentAcceleration}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AltitudeBox
                                currentAltitude={this.state.currentAltitude}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <FlightTimeBox
                                flightTime={this.state.flightTime}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TemperatureBox
                                currentTemperature={this.state.currentTemperature}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <PressureBox currentPressure={this.state.currentPressure} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <ResetTimeBox
                                timeSinceUpdate={this.state.timeSinceUpdate}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Milestones
                                currentAltitude={this.state.currentAltitude}
                                currentVelocity={this.state.currentVelocity}
                                currentAcceleration={this.state.currentAcceleration}
                                currentTemperature={this.state.currentTemperature}
                                drogueParDeploy={this.state.drogueParDeploy}
                                mainParDeploy={this.state.mainParDeploy}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{ marginTop: '1%' }}>
                    <Card>
                        <CardHeader title="Live Location" style={{ textAlign: 'center' }} />
                        <CardContent>
                            <Map
                                latitude={this.state.latitude}
                                longitude={this.state.longitude}
                            />
                        </CardContent>
                    </Card>
                </Container>
            </div>
        );
    }
}
