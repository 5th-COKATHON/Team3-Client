import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Chip from '../../components/Home/Chip';
import 'swiper/css';
import { CATEGORIE_LIST, CATEGORIE_MAP } from '../../conatant';
import useSWR from 'swr';
import { fetcher } from '../../fetcher';
import { Masonry } from '@mui/lab';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const CATEGORIE_LIST_WITH_ALL = ['All', ...CATEGORIE_LIST];

const CATEGORIE_MAP_WITH_ALL: { [key: string]: string } = {
  All: '전체',
  ...CATEGORIE_MAP,
};

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: activities } = useSWR('/activities', fetcher);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeChip, setActiveChip] = useState('All');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const renderChipList = () => {
    return (
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        centeredSlides={true}
        style={{ width: '100%', padding: '8px 0' }}
      >
        {CATEGORIE_LIST_WITH_ALL.map((category) => (
          <SwiperSlide key={category} style={{ width: 'auto' }}>
            <Chip
              active={activeChip === category}
              text={CATEGORIE_MAP_WITH_ALL[category]}
              onClick={() => setActiveChip(category)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const renderGridHeader = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '12px 0',
        }}
      >
        <Box sx={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          오늘의 스냅체인저에 참여해 보세요!
        </Box>
        <Box sx={{ fontSize: '14px', color: '#666' }}></Box>
      </Box>
    );
  };

  const renderGridList = () => {
    return (
      <Masonry columns={2}>
        {activities?.data?.activityResponses?.map((data: any) => (
          <ImageBox
            key={data.id}
            onClick={() =>
              navigate(`/activity/${data.id}`, {
                state: data,
              })
            }
          >
            <img src={data.imageUrl} alt={data.title} />
            <span>{data.title}</span>
          </ImageBox>
        ))}
      </Masonry>
    );
  };

  return (
    <Container
      sx={{
        padding: '12px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {renderChipList()}
      {renderGridHeader()}
      {renderGridList()}
    </Container>
  );
};
const ImageBox = styled.div`
  width: 162px;
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

export default home;
