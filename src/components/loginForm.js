import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export class LoginForm extends React.Component {

  render() {
    return (
      <Grid
        marginTop={10}
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={5}>
        <Typography 
          variant="h2" 
          color="primary" 
          component="div">
          Iniciar sesión
        </Typography>
        <Grid item xs={12}>
        <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
          <TextField
            id="username"
            name="username"
            label="Usuario">
          </TextField>
          </Grid>
          <Grid item xs={12}>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
            <TextField
              id="password"
              name="password"
              label="Contraseña"
              type="password"/>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              type="submit"
              fullWidth
              component={Link} to="/courses">
              Ingresar
            </Button>
          </Grid>
        </Grid>
        );
  }
}

