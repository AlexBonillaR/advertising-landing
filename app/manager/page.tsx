import { Container, Typography, Box } from '@mui/material';

export default function ManagerPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h1">Manager</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Página para managers - Próximamente
        </Typography>
      </Box>
    </Container>
  );
}
