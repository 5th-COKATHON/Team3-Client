import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as LogoBackground } from '../../assets/image/logo-background.svg';

const Logo = () => {
  return (
    <Container>
      <LogoBackground />
      <span>SnapChain</span>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;

  svg {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  span {
    font-family: Baloo-bold;
    font-size: 1.25rem;
    color: #fff;
  }
`;

export default Logo;
