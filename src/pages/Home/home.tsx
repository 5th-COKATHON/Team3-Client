import React from 'react';
import styled from '@emotion/styled';
import Logo from '../../components/common/Logo';

const home = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default home;
