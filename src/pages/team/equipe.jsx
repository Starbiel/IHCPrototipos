import React from "react";
import {
  Box,
  Typography,
  Divider,
  Link,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";

const equipe = [
  {
    title: "SUPERINTENDENTE",
    members: [
      {
        name: "Glauco Gomes de Menezes",
        lattes: "#",
        agenda: "#",
        role: "",
        avatar: "",
      },
    ],
  },
  {
    title: "Unidade de Apoio Administrativo",
    members: [],
  },
  {
    title: "Unidade de Controle e Execução Orçamentária",
    members: [
      {
        name: "Naia Paula Yolanda Bittencourt Tortato",
        info: "Escala presencial: Terça-feira e Quarta-feira",
        avatar: "",
      },
    ],
  },
  {
    title: "COORDENADORIA DE INOVAÇÃO EDUCACIONAL",
    members: [
      {
        name: "Sandramara Scandelari Kusano de Paula Soares",
        lattes: "#",
        agenda: "#",
        role: "Coordenadora",
        avatar: "",
      },
    ],
    sections: [
      {
        title: "Seção EaD",
        members: [
          {
            name: "Anna Jungbluth",
            info: "Escala presencial: Segunda-feira e Sexta-feira",
          },
          { name: "Marina Lupepso", info: "Teletrabalho integral" },
          {
            name: "Renata Ramos das Neves",
            info: "Escala presencial: Terça-feira e Quinta-feira",
          },
          {
            name: "Samara Oliveira Marques da Silva",
            info: "Escala presencial: Quarta-feira e Quinta-feira",
          },
        ],
      },
      {
        title: "Seção de Inovação Tecnológica",
        members: [
          {
            name: "Fabiana Costa Rabello",
            info: "Escala presencial: Terça-feira e Quarta-feira",
          },
          {
            name: "José Eduardo dos Santos Geremias Junior",
            info: "Escala presencial: Segunda-feira e Terça-feira",
          },
          {
            name: "Tiago Leinig",
            info: "Escala presencial: Quinta-feira e Sexta-feira",
          },
          { name: "Renato Ramos", info: "Trabalho presencial todos os dia" },
        ],
      },
    ],
  },
];

function MemberCard({ name, info, lattes, agenda, role }) {
  return (
    <Box sx={{ mb: 0.5, ml: 2 }}>
      <Typography
        fontWeight={600}
        fontSize={15}
        sx={{ textAlign: "left", lineHeight: 1.2 }}
      >
        {name}
        {role && (
          <span
            style={{
              fontWeight: 400,
              color: "#175ABF",
              marginLeft: 6,
              fontSize: 13,
            }}
          >
            ({role})
          </span>
        )}
      </Typography>
      {info && (
        <Typography
          fontSize={13}
          color="text.secondary"
          sx={{
            textAlign: "left",
            fontStyle: "italic",
            lineHeight: 1.1,
          }}
        >
          {info}
        </Typography>
      )}
      {(lattes || agenda) && (
        <Typography mt={0.2} sx={{ textAlign: "left", fontSize: 13 }}>
          {lattes && (
            <Link href={lattes} target="_blank" rel="noopener">
              Lattes
            </Link>
          )}
          {lattes && agenda && " | "}
          {agenda && (
            <Link href={agenda} target="_blank" rel="noopener">
              Agenda
            </Link>
          )}
        </Typography>
      )}
    </Box>
  );
}

export default function EquipePage() {
  return (
    <Box
      maxWidth="lg"
      sx={{
        width: "100%",
        mx: "auto",
        my: 2,
        px: { xs: 1, sm: 2 },
        py: 1,
        background: "#fff",
        borderRadius: 2,
        boxShadow: "0 2px 8px 0 rgba(23,90,191,0.07)",
        textAlign: "left",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={800}
        color="primary.main"
        gutterBottom
        sx={{ mb: 1, letterSpacing: 0.5 }}
      >
        EQUIPE
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {equipe.map((section, idx) => (
        <Box key={section.title} mb={section.sections ? 2.5 : 1.5}>
          <Typography
            variant={idx === 0 ? "h6" : "subtitle1"}
            fontWeight={700}
            color="primary.dark"
            gutterBottom
            sx={{ mb: 0.5 }}
          >
            {section.title}
          </Typography>
          <Stack spacing={0.2}>
            {section.members.map((m) => (
              <MemberCard key={m.name} {...m} />
            ))}
          </Stack>
          {section.sections &&
            section.sections.map((sub) => (
              <Box key={sub.title} mt={1.2} mb={0.5}>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color="primary.main"
                  gutterBottom
                  sx={{ mb: 0.2 }}
                >
                  {sub.title}
                </Typography>
                <Stack spacing={0.1}>
                  {sub.members.map((m) => (
                    <MemberCard key={m.name} {...m} />
                  ))}
                </Stack>
              </Box>
            ))}
        </Box>
      ))}
    </Box>
  );
}
