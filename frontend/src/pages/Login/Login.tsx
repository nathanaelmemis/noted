import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("Clicked login button.");
    console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: "20em",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          required
          value={email}
          label="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          required
          value={password}
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}