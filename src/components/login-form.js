import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

export class LoginForm extends React.Component {

  render() {
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Usuario"
          />

          <TextField
            required
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <Button color="primary" variant="outlined" href="#outlined-buttons">
          <Link to='/courses'>Enviar</Link>
        </Button>
      </Box>
    );
  }
      

}
