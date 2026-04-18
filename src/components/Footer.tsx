'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#111827', py: { xs: 5, md: 6 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'center' },
              justifyContent: 'space-between',
              gap: { xs: 3, md: 0 },
            }}
          >
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #7C3AED 0%, #DD2A7B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>
                  TL
                </Typography>
              </Box>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
                TenloListo
              </Typography>
            </Box>

            {/* Links */}
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 4 }, flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { label: 'Registrarse', href: '/register' },
                { label: 'Influencer', href: '/influencer' },
                { label: 'Business', href: '/business' },
              ].map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 400,
                    '&:hover': { color: '#fff' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>

            {/* Copyright */}
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
              © 2026 TenloListo. Todos los derechos reservados.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
