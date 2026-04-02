'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/src/theme';
import React, { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
