'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/src/theme/theme';
import React, { ReactNode } from 'react';

export default function MuiThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
