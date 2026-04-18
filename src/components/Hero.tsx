'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'framer-motion';

const avatarColors = ['#7C3AED', '#DD2A7B', '#A78BFA', '#F58529', '#8B5CF6'];
const avatarLetters = ['A', 'B', 'C', 'D', 'E'];

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: '#F8F7FF',
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 0 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left: Text Content */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(221,42,123,0.1) 100%)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  borderRadius: '50px',
                  px: 2,
                  py: 0.75,
                  mb: 3,
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 16, color: '#7C3AED' }} />
                <Typography sx={{ fontSize: '0.85rem', color: '#7C3AED', fontWeight: 600 }}>
                  El programa de influencers para creadores cubanos
                </Typography>
              </Box>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
                  fontWeight: 800,
                  color: '#1F2937',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  mb: 2.5,
                }}
              >
                Tu Contenido Merece{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #DD2A7B 50%, #F58529 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  un Pago Justo
                </Box>
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#6B7280',
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 480,
                }}
              >
                Únete a TenloListo: el programa que protege a los creadores cubanos con precios justos,
                pagos garantizados y total transparencia. Tu talento, tus reglas.
              </Typography>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  startIcon={<StarOutlineIcon />}
                  href="/register"
                  sx={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #DD2A7B 100%)',
                    color: '#fff',
                    borderRadius: '50px',
                    px: 3.5,
                    py: 1.4,
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5B21B6 0%, #C02070 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(124,58,237,0.45)',
                    },
                  }}
                >
                  Empieza a Ganar Ahora
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<PlayArrowOutlinedIcon />}
                  href="#como-funciona"
                  sx={{
                    borderColor: '#E5E7EB',
                    color: '#1F2937',
                    borderRadius: '50px',
                    px: 3,
                    py: 1.4,
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': {
                      borderColor: '#7C3AED',
                      backgroundColor: 'transparent',
                      color: '#7C3AED',
                    },
                  }}
                >
                  Cómo Funciona
                </Button>
              </Stack>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex' }}>
                  {avatarLetters.map((letter, i) => (
                    <Avatar
                      key={i}
                      sx={{
                        width: 34,
                        height: 34,
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        backgroundColor: avatarColors[i],
                        border: '2px solid #fff',
                        ml: i === 0 ? 0 : -1,
                        zIndex: 5 - i,
                      }}
                    >
                      {letter}
                    </Avatar>
                  ))}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#1F2937' }}>
                    Programa Beta — Cupos Limitados
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#6B7280' }}>
                    Los primeros creadores cubanos ya están a bordo
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{ flex: 1, maxWidth: '50%', width: '100%', position: 'relative' }}
          >
            <Box
              sx={{
                position: 'relative',
                display: { xs: 'block', md: 'block' },
                width: '100%',
              }}
            >
              {/* Approval badge top */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{ position: 'absolute', top: 32, left: -16, zIndex: 10 }}
              >
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    px: 2.5,
                    py: 1.5,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #EDE9FE 0%, #FCE7F3 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RocketLaunchIcon sx={{ fontSize: 20, color: '#7C3AED' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>
                      Estado
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: '#7C3AED' }}>
                      Proceso de Aprobación Activo
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* Main image */}
              <Box
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-influencer.jpg"
                  alt="Creador de contenido cubano con TenloListo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>

              {/* Earnings badge bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                style={{ position: 'absolute', bottom: 40, right: 0, zIndex: 10 }}
              >
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    px: 2.5,
                    py: 1.5,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    minWidth: 180,
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  <Typography sx={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 500 }}>
                    Tus Ganancias
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 0.5 }}>
                    <Typography
                      sx={{
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #7C3AED 0%, #DD2A7B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Empieza aquí
                    </Typography>
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #D1FAE5 0%, #ECFDF5 100%)',
                        borderRadius: '8px',
                        px: 1,
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <AutoAwesomeIcon sx={{ fontSize: 14, color: '#059669' }} />
                      <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669' }}>
                        100%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
