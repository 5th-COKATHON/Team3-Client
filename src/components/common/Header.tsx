import { Container, Stack } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
        height: '60px',
        border: '1px solid pink',
      }}
    >
      <Stack
        sx={{
          fontFamily: 'Baloo-bold',
          fontSize: '1.25rem',
          color: '#243763',
        }}
      >
        SnapChain
      </Stack>
    </Container>
  );
};

export default Header;
