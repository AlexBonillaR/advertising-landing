import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const steps = [
  {
    icon: <CameraAltOutlinedIcon sx={{ fontSize: 28, color: '#fff' }} />,
    number: '1',
    title: 'Aplica y Se Aprobado',
    description:
      'Registrate, establece tus tarifas y entregables. Nuestros managers aseguran precios justos.',
  },
  {
    icon: <BoltIcon sx={{ fontSize: 28, color: '#fff' }} />,
    number: '2',
    title: 'Se Contratado por Empresas',
    description:
      'Los influencers aprobados son visibles para empresas que crean campanas en TenloListo.',
  },
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 28, color: '#fff' }} />,
    number: '3',
    title: 'Entrega y Cobra',
    description:
      'Completa los entregables, obtiene aprobacion y recibe el pago de forma segura.',
  },
];

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
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '45%' },
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
                src="/images/creators-team.jpg"
                alt="Equipo de creadores"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </Box>
          </Box>

          {/* Right: Steps */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 2 } }}>
            {/* Label */}
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
              COMO FUNCIONA
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
              Como Funciona
            </Typography>

            {/* Steps list */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {steps.map((step, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                  {/* Icon with number badge */}
                  <Box sx={{ position: 'relative', flexShrink: 0 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
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
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
