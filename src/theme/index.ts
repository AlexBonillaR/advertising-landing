import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    instagram: {
      gradient: string;
      pink: string;
      purple: string;
      orange: string;
    };
  }
  interface PaletteOptions {
    instagram?: {
      gradient?: string;
      pink?: string;
      purple?: string;
      orange?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C3AED',
      light: '#A78BFA',
      dark: '#5B21B6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FCD34D',
      light: '#FDE68A',
      dark: '#FBBF24',
      contrastText: '#000000',
    },
    success: {
      main: '#10B981',
      light: '#6EE7B7',
      dark: '#059669',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F7FF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },
    divider: '#E5E7EB',
    instagram: {
      gradient: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 75%, #515BD4 100%)',
      pink: '#DD2A7B',
      purple: '#8134AF',
      orange: '#F58529',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.3px',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.25px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '0.5rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(135deg, #5B21B6 0%, #3F0F5C 100%)',
          },
        },
        containedSecondary: {
          background: '#FCD34D',
          color: '#000000',
          '&:hover': {
            background: '#FBBF24',
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
      styleOverrides: {
        root: {
          padding: '0 1.5rem',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;
