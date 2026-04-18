'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32, color: '#FCD34D' }} />,
    value: 'Programa Beta',
    label: 'Fase de lanzamiento activa',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32, color: '#FCD34D' }} />,
    value: 'Cupos Limitados',
    label: 'Exclusivo para early adopters',
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 32, color: '#FCD34D' }} />,
    value: 'Lanzamiento 2026',
    label: 'Apertura oficial este año',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 32, color: '#FCD34D' }} />,
    value: '100%',
    label: 'Pagos garantizados',
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Stats() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 30%, #DD2A7B 70%, #F58529 100%)',
        py: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
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
              <motion.div key={i} variants={item}>
                <Box
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
                      backdropFilter: 'blur(8px)',
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
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
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
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.75)',
                        fontWeight: 400,
                        mt: 0.25,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
