'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { motion } from 'framer-motion';

const expectations = [
  {
    icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 32, color: '#7C3AED' }} />,
    title: 'Ingresos Reales',
    description:
      'Conectamos tu perfil con marcas que buscan creadores cubanos auténticos. Gana por lo que ya sabes hacer.',
    gradient: 'linear-gradient(135deg, #F5F3FF 0%, #FCE7F3 100%)',
  },
  {
    icon: <HandshakeOutlinedIcon sx={{ fontSize: 32, color: '#DD2A7B' }} />,
    title: 'Contratos Claros',
    description:
      'Cada campaña tiene entregables definidos, plazos y pagos acordados antes de empezar. Sin sorpresas.',
    gradient: 'linear-gradient(135deg, #FCE7F3 0%, #FEF3C7 100%)',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#F58529' }} />,
    title: 'Crecimiento Profesional',
    description:
      'Accede a herramientas, métricas y feedback que te ayudan a mejorar tu contenido y negociar mejores tarifas.',
    gradient: 'linear-gradient(135deg, #FEF3C7 0%, #D1FAE5 100%)',
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 32, color: '#10B981' }} />,
    title: 'Soporte Dedicado',
    description:
      'Un manager personal te acompaña en cada paso: desde la aprobación hasta el cobro de tu campaña.',
    gradient: 'linear-gradient(135deg, #D1FAE5 0%, #F5F3FF 100%)',
  },
  {
    icon: <Diversity3OutlinedIcon sx={{ fontSize: 32, color: '#6D28D9' }} />,
    title: 'Comunidad Exclusiva',
    description:
      'Forma parte del primer grupo de creadores cubanos que monetizan profesionalmente su contenido.',
    gradient: 'linear-gradient(135deg, #EDE9FE 0%, #FCE7F3 100%)',
  },
  {
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 32, color: '#D97706' }} />,
    title: 'Ventaja de Early Adopter',
    description:
      'Los primeros creadores en unirse tendrán prioridad en campañas, tarifas preferenciales y visibilidad destacada.',
    gradient: 'linear-gradient(135deg, #FEF3C7 0%, #F5F3FF 100%)',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: '#F9FAFB' }}>
      <Container maxWidth="lg">
        {/* Image banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              borderRadius: '24px',
              overflow: 'hidden',
              mb: 7,
              height: { xs: 220, md: 320 },
              backgroundColor: '#E5E7EB',
              display: { xs: 'none', md: 'block' },
              position: 'relative',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/creators-team.jpg"
              alt="Creadores cubanos en TenloListo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Gradient overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(221,42,123,0.2) 100%)',
              }}
            />
          </Box>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#7C3AED',
                mb: 1.5,
              }}
            >
              ¿QUÉ PUEDES ESPERAR?
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.9rem', md: '2.5rem' },
                fontWeight: 800,
                color: '#1F2937',
                letterSpacing: '-0.02em',
              }}
            >
              Lo que TenloListo tiene para ti
            </Typography>
            <Typography
              sx={{
                fontSize: '1.05rem',
                color: '#6B7280',
                mt: 2,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Estamos construyendo el programa perfecto para creadores cubanos.
              Esto es lo que obtienes al unirte.
            </Typography>
          </Box>
        </motion.div>

        {/* Expectations grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 3 },
            }}
          >
            {expectations.map((exp, i) => (
              <motion.div key={i} variants={item}>
                <Paper
                  elevation={0}
                  component={motion.div}
                  whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(124,58,237,0.1)' }}
                  transition={{ duration: 0.25 }}
                  sx={{
                    p: { xs: 3, md: 4 },
                    border: '1px solid #E5E7EB',
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                    height: '100%',
                    cursor: 'default',
                    transition: 'border-color 0.3s ease',
                    '&:hover': {
                      borderColor: '#C4B5FD',
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      background: exp.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    {exp.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#1F2937',
                      fontSize: '1.05rem',
                      mb: 1.5,
                    }}
                  >
                    {exp.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#6B7280',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {exp.description}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
