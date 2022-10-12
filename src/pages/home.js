import { Grid } from '@mui/material';
import { LoginForm } from '../components/loginForm'

const Home = (props) => {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={3}>
                <LoginForm />
            </Grid>
        </Grid>
    );
}

export { Home }