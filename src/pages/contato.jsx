import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.nome || !form.email) {
      setError("Preencha nome e e-mail.");
      return;
    }
    setLoading(true);
    // Simulação de envio (substitua por API real se desejar)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ nome: "", email: "", assunto: "", mensagem: "" });
    }, 1200);
  };

  return (
    <Box
      maxWidth="lg"
      sx={{ width: "100%", mx: "auto", my: 2, px: { xs: 1, sm: 2 }, py: 1 }}
    >
      <Paper sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3, boxShadow: 2 }}>
        <Typography
          variant="h5"
          fontWeight={800}
          color="primary.main"
          gutterBottom
          sx={{ mb: 1, letterSpacing: 0.5 }}
        >
          CONTATO
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box component="form" onSubmit={handleSubmit} autoComplete="off">
          <Stack spacing={1}>
            <Typography variant="body1" color="text.primary" sx={{ alignSelf: "flex-start" }}>
              Seu nome (obrigatório) 
            </Typography>
            <TextField
              label="Nome Completo"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            <Typography variant="body1" color="text.primary" sx={{ alignSelf: "flex-start" }}>
              Seu e-mail (obrigatório)
            </Typography>
            <TextField
              label="email@mail.com"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              type="email"
            />
            <Typography variant="body1" color="text.primary" sx={{ alignSelf: "flex-start" }}>
              Assunto
            </Typography>
            <TextField
              label="Assunto..."
              name="assunto"
              value={form.assunto}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <Typography variant="body1" color="text.primary" sx={{ alignSelf: "flex-start" }}>
              Sua mensagem
            </Typography>
            <TextField
              label="Sua mensagem..."
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={5}
              variant="outlined"
            />
            {error && <Alert severity="error">{error}</Alert>}
            <br/>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ alignSelf: "flex-end", minWidth: 120, fontWeight: 700 }}
            >
              {loading ? "Enviando..." : "ENVIAR"}
            </Button>
          </Stack>
        </Box>
      </Paper>
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Mensagem enviada com sucesso! Retornaremos em breve.
        </Alert>
      </Snackbar>
    </Box>
  );
}
