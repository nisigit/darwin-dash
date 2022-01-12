import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.primary.dark,
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: '#a0c4ff',
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
    color: theme.palette.primary.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
        theme.palette.primary.dark,
        0.24
    )} 100%)`
}));


// ----------------------------------------------------------------------

const currentAcceleration = 22;

export default function AccelerationBox() {
    return (
        <RootStyle>
            <IconWrapperStyle>
                <Icon icon="ant-design:rocket-outlined" width={24} height={24} />
            </IconWrapperStyle>
            <Typography variant="h4">{currentAcceleration}</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Acceleration
            </Typography>
        </RootStyle>
    );
}
