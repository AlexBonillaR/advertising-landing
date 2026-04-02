import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const stats = [
  {
    icon: <PeopleAltOutlinedIcon sx={{ fontSize: 32, color: '#FCD34D' }} />,
    value: '500+',
    label: 'Influencers Activos',
  },
  {
    icon: <CameraAltOutlinedIcon sx={{ fontSize: 32, color: '#FCD34D' }} />,
    value: '1,200+',
    label: 'Campanas Completadas',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#FCD34D' }} />,
    value: '$850K+',
    label: 'Pagado a Creadores',
  },
];

export default function Stats() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 50%, #4C1D95 100%)',
        py: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 2 },
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {stats.map((stat, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2.5,
                textAlign: 'left',
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 800,
                    color: '#fff',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.75)',
                    fontWeight: 400,
                    mt: 0.25,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
