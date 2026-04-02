import React from 'react';
import { Box, Container, Typography, Paper, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    quote: 'TenloListo cambio mi carrera. Por fin me pagan lo que merezco.',
    name: 'Sofia Martinez',
    handle: '@sofimtz_',
    followers: '245K seguidores',
    avatarColor: '#7C3AED',
    avatarLetter: 'SM',
  },
  {
    quote: 'Pagos seguros y marcas reales. Asi deberia funcionar el marketing de influencers.',
    name: 'Carlos Reyes',
    handle: '@carlosreyes',
    followers: '180K seguidores',
    avatarColor: '#1F2937',
    avatarLetter: 'CR',
  },
  {
    quote: 'No mas perseguir pagos. TenloListo se encarga de todo.',
    name: 'Ana Lucia Gomez',
    handle: '@analugomez',
    followers: '320K seguidores',
    avatarColor: '#374151',
    avatarLetter: 'AG',
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: '#F9FAFB' }}>
      <Container maxWidth="lg">
        {/* Image banner */}
        <Box
          sx={{
            borderRadius: '24px',
            overflow: 'hidden',
            mb: 7,
            height: { xs: 220, md: 320 },
            backgroundColor: '#E5E7EB',
            display: { xs: 'none', md: 'block' },
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/creators-team.jpg"
            alt="Creadores en TenloListo"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>

        {/* Section header */}
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
            TESTIMONIOS
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
            Creadores confian en nosotros en 12+ paises
          </Typography>
        </Box>

        {/* Testimonials grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <Paper
              key={i}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid #E5E7EB',
                borderRadius: '20px',
                backgroundColor: '#fff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {/* Quote icon */}
              <FormatQuoteIcon
                sx={{
                  fontSize: 36,
                  color: '#FCD34D',
                  mb: 2,
                  transform: 'scaleX(-1)',
                }}
              />

              {/* Quote text */}
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  color: '#374151',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  mb: 3,
                  minHeight: 80,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </Typography>

              {/* Author */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: t.avatarColor,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  {t.avatarLetter}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#1F2937', fontSize: '0.95rem' }}>
                    {t.name}
                  </Typography>
                  <Typography sx={{ color: '#7C3AED', fontSize: '0.85rem', fontWeight: 500 }}>
                    {t.handle}
                  </Typography>
                  <Typography sx={{ color: '#9CA3AF', fontSize: '0.8rem' }}>
                    {t.followers}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
