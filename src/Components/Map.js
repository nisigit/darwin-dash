import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Box } from "@mui/system";
import { Card } from "@mui/material";

const render = (status = Status) => {
    return <h1>{status}</h1>;
};

<Wrapper apiKey={"AIzaSyBqdCU5Z7d7M42GdCwuHPZEGVRr38TQbNU"} render={render}>
</Wrapper>

export default () => {
    return (
        <Card>
            <Box>
                <div id="myMap" style={{ position: 'relative', width: '600px', height: '400px' }}></div>
            </Box>
        </Card>
    );
}