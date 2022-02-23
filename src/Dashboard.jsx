import React, { Component } from 'react';
import './dash.css';
import { Container, Grid, Box, Typography, Card, CardHeader } from '@mui/material';
import VelocityBox from './Components/VelocityBox';
import AccelerationBox from './Components/AccelerationBox';
import AltitudeBox from './Components/AltitudeBox';
import FlightTimeBox from './Components/FlightTimeBox';
import MapContainer from './Components/MapContainer';
import PressureBox from './Components/PressureBox';
import Milestones from './Components/Milestones';
import ResetTimeBox from './Components/ResetTimeBox';
import TemperatureBox from './Components/TemperatureBox';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVelocity: 0,
            currentAcceleration: 0
        };
    }

    async componentDidMount() {
        const axios = require('axios');
        while (true) {
            try {
                const response = await axios.get('https://random-data-api.com/api/number/random_number');
                this.setState({
                    currentVelocity: Math.round(response.data.positive)

                })
            } catch (err) {
                console.log("Error: " + err);
            }
        }
    }

    render() {
        return (
            <div className='dash-container'>
                <Container maxWidth="xl">
                    <Box sx={{ pb: 5 }}>
                        <Typography variant="h3" className='dash-head' style={{ textAlign: 'center', color: '#fff' }}>
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
                                acceleration={0}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AltitudeBox />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <FlightTimeBox />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TemperatureBox />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <PressureBox />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <ResetTimeBox />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Milestones
                                currentAltitude={this.state.currentVelocity}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}
