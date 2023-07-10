import React, { useState, FormEvent } from 'react';
import { TextField, Button } from '@mui/material';
import BaseButton from './BaseButton';
interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = ( onSubmit:any ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Call the onSubmit callback with email and password values
    onSubmit(email, password);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
    <h1> Connexion</h1>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
        <div style={{ height:'50px', marginTop:'10px'}}>
          <BaseButton
            type="submit"
            text={'Connexion'}
            width='100%'
            variant="contained"
            disabled={false}
            backgroundColor={'#2b5e5a'} />
                </div>
    </form>
        </div>
  );
};

export default LoginForm;
