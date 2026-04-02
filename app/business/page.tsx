import { Container, Typography, Box } from '@mui/material';

export default function BusinessPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h1">Business</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Página para negocios - Próximamente
        </Typography>
      </Box>
    </Container>
  );
}
