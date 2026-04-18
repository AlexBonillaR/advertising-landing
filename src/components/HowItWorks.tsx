'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <CameraAltOutlinedIcon sx={{ fontSize: 28, color: '#fff' }} />,
    number: '1',
    title: 'Aplica y Sé Aprobado',
    description:
      'Regístrate, establece tus tarifas y entregables. Nuestros managers aseguran precios justos.',
  },
  {
    icon: <BoltIcon sx={{ fontSize: 28, color: '#fff' }} />,
    number: '2',
    title: 'Sé Contratado por Empresas',
    description:
      'Los influencers aprobados son visibles para empresas que crean campañas en TenloListo.',
  },
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 28, color: '#fff' }} />,
    number: '3',
    title: 'Entrega y Cobra',
    description:
      'Completa los entregables, obtén aprobación y recibe el pago de forma segura.',
  },
];

const stepsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepItem = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HowItWorks() {
  return (
    <Box
      id="como-funciona"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: '#1F2937',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -120,
          left: -80,
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(221,42,123,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ flex: 1, maxWidth: '45%', order: undefined }}
          >
            <Box
              sx={{
                order: { xs: 2, md: 1 },
              }}
            >
              <Box
                sx={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '4/3',
                  backgroundColor: '#374151',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/creators-team.jpg"
                  alt="Equipo de creadores cubanos"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            </Box>
          </motion.div>

          {/* Right: Steps */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 2 } }}>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#FCD34D',
                  mb: 1.5,
                }}
              >
                CÓMO FUNCIONA
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.9rem', md: '2.5rem' },
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  mb: 5,
                }}
              >
                Cómo Funciona
              </Typography>
            </motion.div>

            {/* Steps list */}
            <motion.div
              variants={stepsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <motion.div key={i} variants={stepItem}>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                      {/* Icon with number badge */}
                      <Box sx={{ position: 'relative', flexShrink: 0 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #7C3AED 0%, #DD2A7B 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {step.icon}
                        </Box>
                        {/* Number badge */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            backgroundColor: '#FCD34D',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#000' }}>
                            {step.number}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Content */}
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: '#fff',
                            fontSize: '1.1rem',
                            mb: 0.75,
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.9rem',
                            lineHeight: 1.65,
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
