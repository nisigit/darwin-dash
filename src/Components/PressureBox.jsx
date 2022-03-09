// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error.dark,
    // backgroundColor: theme.palette.error.light,
    backgroundColor: '#f28482',
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
    color: theme.palette.error.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
        theme.palette.error.dark,
        0.24
    )} 100%)`
}));

// ----------------------------------------------------------------------


export default function PressureBox(props) {
    return (
        <RootStyle>
            <IconWrapperStyle>
                <SpeedIcon width={24} height={24} />
            </IconWrapperStyle>
            <Typography variant="h4">{props.currentPressure}Pa</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Pressure
            </Typography>
        </RootStyle>
    );
}
