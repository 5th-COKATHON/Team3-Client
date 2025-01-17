import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../fetcher';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import styled from '@emotion/styled';

const Activity = () => {
  const { id } = useParams();
  const location = useLocation();
  const activity = location.state;

  const { data: thread } = useSWR(`/activities/${id}/threads`, fetcher);

  const renderHeader = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '16px 0',
          background: '#243763',
          borderRadius: '10px',
        }}
      >
        <Box sx={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>{activity?.title}</Box>
      </Box>
    );
  };

  const renderList = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '12px 0',
        }}
      >
        {thread?.data?.activityThreadResponses?.map((data: any) => (
          <ImageBox key={data.description}>
            <img src={data.imageUrl} alt={data.description} />
            <span>{data.description}</span>
          </ImageBox>
        ))}
      </Box>
    );
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: '12px',
      }}
    >
      {renderHeader()}
      {renderList()}
    </Container>
  );
};

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  position: relative;

  img {
    width: 100%;
    height: auto; /* 이미지를 비율에 맞게 조정 */
    display: block; /* 이미지 아래 여백 제거 */
    border-radius: 10px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 36px;
    background: rgba(36, 55, 99, 0.63);
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default Activity;
