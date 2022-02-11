import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import '../dash.css';

export default (props) => {
    return (
        <Card>
            <CardHeader title="Milestones" />
            <CardContent>
                <ul className='milestone-list'>
                    <li className='milestone'>Maximum Altitude (Apogee): {props.maxAltitude}m</li>
                    <li className='milestone'>Terminal Velocity: 56 m/s</li>
                    <li className='milestone'>Drogue Parachute Deployed: Yes</li>
                    <li className='milestone'>Main Parachute Deployed: No</li>
                </ul>
            </CardContent>
        </Card>
    );
}