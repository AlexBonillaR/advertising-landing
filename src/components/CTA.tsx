import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function CTA() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #6D28D9 100%)',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.03em',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Listo para monetizar tu contenido?
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            color: 'rgba(255,255,255,0.8)',
            mb: 5,
            lineHeight: 1.7,
          }}
        >
          Unete a miles de creadores que confian en TenloListo para crecer su carrera.
        </Typography>

        <Button
          variant="contained"
          startIcon={<AutoAwesomeIcon />}
          href="/register"
          sx={{
            background: '#FCD34D',
            color: '#000',
            borderRadius: '50px',
            px: { xs: 4, md: 6 },
            py: 1.75,
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 700,
            mb: 3.5,
            '&:hover': {
              background: '#FBBF24',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(252,211,77,0.4)',
            },
          }}
        >
          Empieza a Ganar Ahora
        </Button>

        {/* Trust badges */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 3, md: 4 },
            flexWrap: 'wrap',
          }}
        >
          {['Precios Justos', 'Pagos Seguros'].map((badge) => (
            <Box
              key={badge}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
              }}
            >
              <TaskAltIcon sx={{ fontSize: 18, color: '#FCD34D' }} />
              <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: 500 }}>
                {badge}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
