// pages/login.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Button, TextField, Grid, Paper, Typography, Link } from '@mui/material';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '123' && password === '123') {
      Cookies.set('isLoggedIn', 'true');
      router.push('/');
    } else {
      alert('Incorrect credentials.');
    }
  };

  return (
    <Grid container justifyContent="center" style={{ minHeight: '100vh' }}>
      <Grid item>
        <Paper style={{ padding: '50px', width: '300px' }}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5">Login</Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
              <Grid item>
                <TextField
                  required
                  type="text"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">Log in</Button>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
