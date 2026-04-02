'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Registrarse', href: '/register' },
    { label: 'Influencer', href: '/influencer' },
    { label: 'Manager', href: '/manager' },
    { label: 'Business', href: '/business' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #f3f4f6',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 0.5 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '12px',
                backgroundColor: '#7C3AED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '-0.5px',
                }}
              >
                TL
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#1F2937',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              TenloListo
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navLinks.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  color: '#6B7280',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  '&:hover': { color: '#7C3AED' },
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>

          {/* Right side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {/* Language - Desktop */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                color: '#6B7280',
                cursor: 'pointer',
                '&:hover': { color: '#7C3AED' },
              }}
            >
              <LanguageIcon sx={{ fontSize: 20 }} />
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>EN</Typography>
            </Box>

            <Button
              variant="contained"
              href="/register"
              sx={{
                background: '#7C3AED',
                color: '#fff',
                borderRadius: '50px',
                px: { xs: 2, md: 3 },
                py: 1,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                fontWeight: 600,
                whiteSpace: 'nowrap',
                '&:hover': {
                  background: '#5B21B6',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(124,58,237,0.4)',
                },
              }}
            >
              Empieza a Ganar Ahora
            </Button>

            {/* Mobile menu toggle */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#1F2937' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 260, p: 2 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} component="a" href={link.href} sx={{ borderRadius: 1 }}>
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ fontWeight: 500, color: '#1F2937' }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
