import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import VelocityBox from './Components/VelocityBox';
import AccelerationBox from './Components/AccelerationBox';
import AltitudeBox from './Components/AltitudeBox';
import FlightTimeBox from './Components/FlightTimeBox';
import Map from './Components/Map';
import Milestones from './Components/Milestones';
import './dash.css';

export default function Dashboard() {
    return (
        <div className='dash-container'>
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h5" className='dash-head'>
                        Hi, Welcome to the Darwin III Dashboard
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <VelocityBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AccelerationBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AltitudeBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FlightTimeBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AltitudeBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FlightTimeBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <VelocityBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AccelerationBox />
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <Map />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Milestones />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}
