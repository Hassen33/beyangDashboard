import React, { useState, FormEvent } from "react";
import { TextField, Button } from "@mui/material";
import BaseButton from "./BaseButton";
interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const SignUpForm = (onSubmit: any) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState<number>();
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Call the onSubmit callback with email and password values
    onSubmit(email, password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "35%",
        margin: " 120px auto 0 auto",
      }}
    >
      <h1> Inscription</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Prénom"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
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
          label="Numéro"
          type="number"
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Adress"
          type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <div style={{ height: "50px", marginTop: "10px" }}>
          <BaseButton
            type="submit"
            text={"S'inscrire"}
            width="100%"
            variant="contained"
            disabled={false}
            backgroundColor={"#2b5e5a"}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
