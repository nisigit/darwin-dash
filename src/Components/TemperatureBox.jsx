// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
    // backgroundColor: '#a0c4ff',
    borderRadius: '5%',
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.secondary.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.secondary.dark, 0)} 0%, ${alpha(
        theme.palette.secondary.dark,
        0.24
    )} 100%)`
}));


// ----------------------------------------------------------------------

const temperature = 275;

export default function TemperatureBox() {
    return (
        <RootStyle>
            <IconWrapperStyle>
                <ThermostatIcon width={24} height={24}/>
            </IconWrapperStyle>
            <Typography variant="h4">{temperature}K</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Temperature
            </Typography>
        </RootStyle>
    );
}
