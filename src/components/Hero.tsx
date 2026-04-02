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
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const avatarColors = ['#7C3AED', '#5B21B6', '#A78BFA', '#6D28D9', '#8B5CF6'];
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
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: '#EDE9FE',
                border: '1px solid #C4B5FD',
                borderRadius: '50px',
                px: 2,
                py: 0.75,
                mb: 3,
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 16, color: '#7C3AED' }} />
              <Typography sx={{ fontSize: '0.85rem', color: '#7C3AED', fontWeight: 500 }}>
                La plataforma #1 para creadores en Latinoamerica
              </Typography>
            </Box>

            {/* Headline */}
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
              Tu Contenido Merece un Pago Justo
            </Typography>

            {/* Subtitle */}
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
              Unete a TenloListo: la plataforma que protege a los creadores con precios justos,
              pagos garantizados y total transparencia. Tu talento, tus reglas.
            </Typography>

            {/* CTAs */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                startIcon={<StarOutlineIcon />}
                href="/register"
                sx={{
                  background: '#7C3AED',
                  color: '#fff',
                  borderRadius: '50px',
                  px: 3.5,
                  py: 1.4,
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    background: '#5B21B6',
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
                Como Funciona
              </Button>
            </Stack>

            {/* Social proof */}
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
                  500+ creators
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: '#6B7280' }}>
                  Creadores confian en nosotros en 12+ paises
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right: Hero Image */}
          <Box
            sx={{
              flex: 1,
              position: 'relative',
              display: { xs: 'block', md: 'block' },
              maxWidth: { xs: '100%', md: '50%' },
              width: '100%',
            }}
          >
            {/* Approval badge top */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 16, md: 32 },
                left: { xs: 12, md: -16 },
                zIndex: 10,
                backgroundColor: '#fff',
                borderRadius: '16px',
                px: 2.5,
                py: 1.5,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: '#FEF9C3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TaskAltIcon sx={{ fontSize: 20, color: '#F59E0B' }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>
                  Aprobado
                </Typography>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#1F2937' }}>
                  $850 USD
                </Typography>
              </Box>
            </Box>

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
                src="/images/hero-influencer.jpg"
                alt="Influencer exitoso con TenloListo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Fallback gradient */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #4C1D95 50%, #7C3AED 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '4rem' }}>📸</Typography>
              </Box>
            </Box>

            {/* Earnings badge bottom */}
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 24, md: 40 },
                right: { xs: 12, md: 0 },
                zIndex: 10,
                backgroundColor: '#fff',
                borderRadius: '16px',
                px: 2.5,
                py: 1.5,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                minWidth: 180,
              }}
            >
              <Typography sx={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 500 }}>
                Ganancias Totales
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 0.5 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#7C3AED' }}>
                  $12,450
                </Typography>
                <Box
                  sx={{
                    backgroundColor: '#D1FAE5',
                    borderRadius: '8px',
                    px: 1,
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <TrendingUpIcon sx={{ fontSize: 14, color: '#059669' }} />
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669' }}>
                    +34%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
