import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import '../dash.css';

let maxAltitude = 0;
let terminalVel = 0;
let drogueParDeploy, mainParDeploy = false;
export default function Milestones(props) {
    maxAltitude = Math.max(maxAltitude, props.currentAltitude);
    terminalVel = Math.max(terminalVel, props.currentVelocity);
    drogueParDeploy = props.drogueParDeploy ? "Yes" : "No"
    mainParDeploy = props.mainParDeploy ? "Yes" : "No"
    return (
        <Card>
            <CardHeader title="Milestones" />
            <CardContent>
                <ul className='milestone-list'>
                    <li className='milestone'>Maximum Altitude (Apogee): {maxAltitude}m</li>
                    <li className='milestone'>Terminal Velocity: {terminalVel} m/s</li>
                    <li className='milestone'>Drogue Parachute Deployed: {drogueParDeploy} </li>
                    <li className='milestone'>Main Parachute Deployed: {mainParDeploy}</li>
                </ul>
            </CardContent>
        </Card>
    );
}
