import React, { Component } from 'react';
import './dash.css';
import { Container, Grid, Box, Typography } from '@mui/material';
import VelocityBox from './Components/VelocityBox';
import AccelerationBox from './Components/AccelerationBox';
import AltitudeBox from './Components/AltitudeBox';
import FlightTimeBox from './Components/FlightTimeBox';
import PressureBox from './Components/PressureBox';
import Milestones from './Components/Milestones';
import ResetTimeBox from './Components/ResetTimeBox';
import TemperatureBox from './Components/TemperatureBox';
import logo from './endeavour-logo.png';

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
        };
    }

    async componentDidMount() {
        while (true) {
            const axios = require('axios');
            try {
                const response = await axios.get('https://random-data-api.com/api/number/random_number');
                this.setState({
                    currentVelocity: (response.data.normal).toFixed(2),
                    currentAcceleration: response.data.decimal,
                    currentAltitude: (response.data.positive).toFixed(2),
                    currentPressure: Math.round(response.data.digit),
                    currentTemperature: Math.round(response.data.non_zero_number),
                    drogueParDeploy: !this.state.drogueParDeploy,
                    mainParDeploy: !this.state.mainParDeploy
                });
                await new Promise(r => setTimeout(r, 500));
            } catch (err) {
                console.log("Error: " + err);
            }
        }

    }

    render() {
        return (
            <div className='dash-container'>
                <div className='logo'>
                    <a target='_blank' href='https://endeavourockets.com'><img src={logo}></img></a>
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
                            <FlightTimeBox />
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
                            <ResetTimeBox />
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
            </div>
        );
    }
}
