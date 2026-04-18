'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 28, color: '#D97706' }} />,
    iconBg: '#FEF3C7',
    title: 'Precios Justos',
    description:
      'Managers expertos revisan y aprueban tarifas para asegurar un valor justo de mercado.',
  },
  {
    icon: <ShieldOutlinedIcon sx={{ fontSize: 28, color: '#7C3AED' }} />,
    iconBg: '#F5F3FF',
    title: 'Pagos Seguros',
    description:
      'Todos los pagos centralizados en TenloListo. Fondos retenidos hasta completar entregables.',
  },
  {
    icon: <VisibilityOutlinedIcon sx={{ fontSize: 28, color: '#DD2A7B' }} />,
    iconBg: '#FCE7F3',
    title: 'Total Transparencia',
    description: 'Rastrea cada campaña, pago y entregable con total auditabilidad.',
  },
  {
    icon: <TaskAltIcon sx={{ fontSize: 28, color: '#10B981' }} />,
    iconBg: '#D1FAE5',
    title: 'Control de Calidad',
    description:
      'Flujos de aprobación aseguran que solo influencers verificados lleguen a tus campañas.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Benefits() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
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
              ¿POR QUÉ TENLOLISTO?
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
              ¿Por qué TenloListo?
            </Typography>
          </Box>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: { xs: 2, md: 3 },
            }}
          >
            {benefits.map((benefit, i) => (
              <motion.div key={i} variants={item}>
                <Paper
                  elevation={0}
                  component={motion.div}
                  whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(124,58,237,0.12)' }}
                  transition={{ duration: 0.25 }}
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    border: '1px solid #F3F4F6',
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
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '14px',
                      backgroundColor: benefit.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: '#1F2937', mb: 1.5, fontSize: '1.05rem' }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#6B7280', lineHeight: 1.65, fontSize: '0.9rem' }}
                  >
                    {benefit.description}
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
