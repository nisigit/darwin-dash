import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import '../dash.css';

export default function Milestones() {
    return (
        <Card>
            <CardHeader title="Milestones" />
            <CardContent>
                <ul className='milestone-list'>
                    <li className='milestone'>Maximum Altitude (Apogee): 9000m</li>
                    <li className='milestone'>Terminal Velocity: 56 m/s</li>
                    <li className='milestone'>Drogue Parachute Deployed: Yes</li>
                    <li className='milestone'>Main Parachute Deployed: No</li>
                </ul>
            </CardContent>
        </Card>
    );
}