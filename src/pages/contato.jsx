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
  // Estado para controlar qual página do formulário está ativa (1 ou 2)
  const [pagina, setPagina] = useState(1);

  // Estado único para todos os 15 campos
  const [form, setForm] = useState({
    // Página 1
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    assunto: "",
    mensagem: "",
    // Página 2
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    comoNosConheceu: "",
    preferenciaContato: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError(""); // Limpa erros ao digitar
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // --- Funções de Navegação e Submissão ---

  const handleNext = () => {
    // if (!form.nome || !form.email || !form.telefone) {
    //   setError("Por favor, preencha Nome, E-mail e Telefone para continuar.");
    //   return;
    // }
    // setError("");
    setPagina(2);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setPagina(1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      console.log("Formulário Enviado:", form);
      setLoading(false);
      setSuccess(true);
      setForm({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        assunto: "",
        mensagem: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        comoNosConheceu: "",
        preferenciaContato: "",
      });
      setPagina(1);
    }, 1500);
  };

  // --- Renderização do Componente ---

  return (
    <Box
      maxWidth="lg"
      sx={{ width: "100%", mx: "auto", my: 2, px: { xs: 1, sm: 2 }, py: 1 }}
    >
      <Paper sx={{ p: { xs: 2, sm: 4 }, borderRadius: 1, boxShadow: 2 }}>
        <Typography
          variant="h5"
          fontWeight={800}
          color="primary.main"
          gutterBottom
          sx={{ mb: 1, letterSpacing: 0.5 }}
        >
          ENTRE EM CONTATO
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          Passo {pagina} de 2
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Box component="form" onSubmit={handleSubmit} autoComplete="off">
          {/* RENDERIZAÇÃO CONDICIONAL DA PÁGINA 1 */}
          {pagina === 1 && (
            <Stack spacing={2}>
              <Typography variant="h3" color="text.secondary" gutterBottom>
                Informações de Contato
              </Typography>

              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  Nome (obrigatório)
                </Typography>
                <TextField
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  fullWidth
                  placeholder="Digite seu nome"
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  E-mail (obrigatório)
                </Typography>
                <TextField
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="email"
                  placeholder="exemplo@email.com"
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  Telefone (obrigatório)
                </Typography>
                <TextField
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                  fullWidth
                  placeholder="(XX) XXXXX-XXXX"
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  Empresa (opcional)
                </Typography>
                <TextField
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Nome da empresa"
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  Assunto
                </Typography>
                <TextField
                  name="assunto"
                  value={form.assunto}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Motivo do contato"
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  Sua mensagem
                </Typography>
                <TextField
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  minRows={5}
                  placeholder="Digite sua mensagem aqui"
                  variant="outlined"
                />
              </Box>

              {error && <Alert severity="error">{error}</Alert>}

              <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 1 }}>
                <Button variant="contained" onClick={handleNext}>
                  Próximo
                </Button>
              </Box>
            </Stack>
          )}

          {/* RENDERIZAÇÃO CONDICIONAL DA PÁGINA 2 */}
          {pagina === 2 && (
            <Stack spacing={2}>
              <Typography
                variant="h6"
                color="text.secondary"
                gutterBottom
                align="left"
              >
                Informações Adicionais (Opcional)
              </Typography>

              <div style={{ display: "flex", gap: "16px" }}>
                <Box sx={{ display: "inline-block", width: "50%" }}>
                  <Typography variant="h4" gutterBottom align="left">
                    CEP
                  </Typography>
                  <TextField
                    name="cep"
                    value={form.cep}
                    onChange={handleChange}
                    fullWidth
                    placeholder="XXXXX-XXX"
                    variant="outlined"
                  />
                </Box>

                <Box sx={{ display: "inline-block", width: "50%" }}>
                  <Typography variant="h4" gutterBottom align="left">
                    Estado
                  </Typography>
                  <TextField
                    name="estado"
                    value={form.estado}
                    onChange={handleChange}
                    fullWidth
                    placeholder="UF"
                    variant="outlined"
                  />
                </Box>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                
              <Box sx={{ display: "inline-block", width: "50%" }}>
                <Typography variant="h4" gutterBottom align="left">
                  Bairro
                </Typography>
                <TextField
                  name="bairro"
                  value={form.bairro}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Digite o bairro"
                  variant="outlined"
                />
              </Box>

              <Box sx={{ display: "inline-block", width: "50%" }}>
                <Typography variant="h4" gutterBottom align="left">
                  Cidade
                </Typography>
                <TextField
                  name="cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Digite a cidade"
                  variant="outlined"
                />
              </Box>

              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <Box sx={{ display: "inline-block", width: "75%" }}>
                  <Typography variant="h4" gutterBottom align="left">
                    Endereço
                  </Typography>
                  <TextField
                    name="endereco"
                    value={form.endereco}
                    onChange={handleChange}
                    fullWidth
                    placeholder="Digite seu endereço"
                    variant="outlined"
                  />
                </Box>

                <Box sx={{ display: "inline-block", width: "25%" }}>
                  <Typography variant="h4" gutterBottom align="left">
                    Número
                  </Typography>
                  <TextField
                    name="numero"
                    value={form.numero}
                    onChange={handleChange}
                    fullWidth
                    placeholder="Número do imóvel"
                    variant="outlined"
                  />
                </Box>
              </div>
              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  Complemento
                </Typography>
                <TextField
                  name="complemento"
                  value={form.complemento}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Apartamento, bloco, etc."
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  Como nos conheceu?
                </Typography>
                <TextField
                  name="comoNosConheceu"
                  value={form.comoNosConheceu}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Google, Indicação, etc."
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="h4" gutterBottom align="left">
                  Preferência de Contato
                </Typography>
                <TextField
                  name="preferenciaContato"
                  value={form.preferenciaContato}
                  onChange={handleChange}
                  fullWidth
                  placeholder="E-mail, WhatsApp, Ligação"
                  variant="outlined"
                />
              </Box>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ pt: 1 }}
              >
                <Button variant="outlined" onClick={handleBack}>
                  Voltar
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "ENVIAR MENSAGEM"}
                </Button>
              </Stack>
            </Stack>
          )}
        </Box>
      </Paper>

      {/* Snackbar de sucesso para feedback */}
      <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Mensagem enviada com sucesso! Agradecemos o seu contato.
        </Alert>
      </Snackbar>
    </Box>
  );
}
