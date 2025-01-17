import { Fab, styled } from '@mui/material';
import React from 'react';
import ModeIcon from '@mui/icons-material/Mode';
import { useNavigate } from 'react-router-dom';

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <StyledFab onClick={handleClick}>
      <ModeIcon
        sx={{
          color: '#FFFFFF',
          fontSize: '24px',
        }}
      />
      <span>목표 작성</span>
    </StyledFab>
  );
};

const StyledFab = styled(Fab)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: #ff6e31;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  span {
    color: #fff;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 400;
  }

  &:hover {
    background: #ff6e31;
  }
`;

export default FloatingButton;
