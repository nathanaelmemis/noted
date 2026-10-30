import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

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
          onClick={_ => login({ email, password })}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}