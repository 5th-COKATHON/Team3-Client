import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Chip from '../../components/Home/Chip';
import 'swiper/css';
import { CATEGORIE_LIST, CATEGORIE_MAP } from '../../conatant';

const CATEGORIE_LIST_WITH_ALL = ['All', ...CATEGORIE_LIST];

const CATEGORIE_MAP_WITH_ALL: { [key: string]: string } = {
  All: '전체',
  ...CATEGORIE_MAP,
};

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeChip, setActiveChip] = useState('All');

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

  const renderGridList = () => {
    return <div></div>;
  };

  return (
    <Container
      sx={{
        padding: '12px 0',
        width: '100%',
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
