import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
      >
        <ErrorOutlineIcon style={{ fontSize: 100, color: '#ff1744' }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          We can't find the page you're looking for.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoHome}
          style={{ marginTop: '20px' }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
