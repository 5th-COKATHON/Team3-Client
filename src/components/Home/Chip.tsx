import { Box } from '@mui/material';
import React from 'react';

interface ChipProps {
  active?: boolean;
  text: string;
  onClick: () => void;
}

const Chip = ({ active = false, text, onClick }: ChipProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: '53px',
        height: '26px',
        borderRadius: '100px',
        border: '1px solid #243763',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Pretendard',
        fontSize: '14px',
        backgroundColor: active ? '#243763' : '#FBFCFF',
        color: active ? '#FFFBF6' : '#243763',
      }}
    >
      {text}
    </Box>
  );
};

export default Chip;
