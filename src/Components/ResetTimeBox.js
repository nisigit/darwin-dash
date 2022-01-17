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
    color: theme.palette.warning.dark,
    backgroundColor: '#ffca3a',
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
    color: theme.palette.warning.dark,
    backgroundImage: `linear-gradient(135deg, #ffe66d 0%, #ff9f1c 100%)`
}));

// ----------------------------------------------------------------------

const resetTime = 500;

export default function ResetTimeBox() {
    return (
        <RootStyle>

            <IconWrapperStyle>
                <Icon icon="bi:stopwatch" width={24} height={24} />
            </IconWrapperStyle>
            <Typography variant="h4">{resetTime}ms</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Flight Time
            </Typography>
        </RootStyle>
    );
}
