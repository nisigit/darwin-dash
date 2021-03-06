import { Icon } from '@iconify/react';
// material
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.dark,
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
    backgroundImage: `linear-gradient(135deg, #83c5be 0%, #006d77 100%)`
}));


// ----------------------------------------------------------------------

export default function AltitudeBox(props) {
    return (
        <RootStyle style={{ backgroundColor:'#83c5be'}}>
            <IconWrapperStyle>
                <Icon icon="flat-ui:rocket" width={24} height={24}/>
            </IconWrapperStyle>
            <Typography variant="h4">{props.currentAltitude}m</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Altitude
            </Typography>
        </RootStyle>
    );
}
