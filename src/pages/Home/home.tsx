import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Chip from '../../components/Home/Chip';
import 'swiper/css';

const CATEGORIE_LIST = [
  '전체',
  '운동',
  '입시',
  '개발',
  '취미',
  '여행',
  '건강',
  '취준',
  '언어',
  '봉사',
  '예술',
  '독서',
  '일상',
];

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeChipIndex, setActiveChipIndex] = useState(0);

  const renderChipList = () => {
    return (
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        centeredSlides={true}
        style={{ width: '100%', padding: '8px 0' }}
      >
        {CATEGORIE_LIST.map((category, index) => (
          <SwiperSlide key={category} style={{ width: 'auto' }}>
            <Chip
              active={index === activeChipIndex}
              text={category}
              onClick={() => setActiveChipIndex(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const renderGridList = () => {
    return <div></div>;
  };

  return (
    <Container
      sx={{
        padding: '12px 0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {renderChipList()}
      {renderGridList()}
    </Container>
  );
};

export default home;
