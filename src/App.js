import './App.css';
import MapContainer from './Components/MapContainer';
import Dashboard from './Dashboard';
import { Grid } from '@mui/material';

function App() {
    return (
        <>
            <div className='App'>
                <Dashboard />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', background: 'blue' }}>
                <Grid item xs={12} md={6} lg={8}>
                    <MapContainer
                        lat={53}
                    />
                </Grid>
            </div>
        </>
    );
}

export default App;
