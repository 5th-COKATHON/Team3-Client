import { Fab, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModeIcon from '@mui/icons-material/Mode';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

const FloatingButton = () => {
  const [mode, setMode] = useState('register');

  const navigate = useNavigate();
  const location = useLocation();

  const handleClickRegister = () => {
    navigate('/register');
  };

  const handleClickFollow = () => {
    navigate('/follow', {
      state: location.state,
    });
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setMode('register');
    } else if (location.pathname.startsWith('/activity')) {
      setMode('follow');
    } else {
      setMode('none');
    }
  }, [location]);

  if (mode === 'none') {
    return null;
  }

  if (mode === 'follow') {
    return (
      <StyledFab onClick={handleClickFollow}>
        <FilterNoneIcon
          sx={{
            color: '#FFFFFF',
            fontSize: '24px',
          }}
        />
        <span>따라하기</span>
      </StyledFab>
    );
  }

  return (
    <StyledFab onClick={handleClickRegister}>
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
  position: sticky;
  bottom: 20px;
  left: 280px;
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
