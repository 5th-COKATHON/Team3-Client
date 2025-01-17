import { Box, Container, Select, styled, TextField } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { CATEGORIE_LIST } from '../../conatant';
import { api } from '../../axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState(CATEGORIE_LIST[0]);
  const [image, setImage] = React.useState<File | null>(null);
  const [description, setDescription] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append(
      'request',
      new Blob(
        [
          JSON.stringify({
            title: title,
            category: category,
            description: description,
          }),
        ],
        { type: 'application/json' },
      ),
    );

    if (image) {
      formData.append('image', image as Blob);
    }

    try {
      await api.post('/activities', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setImage(files[0]);
    }
  };

  const renderHeader = () => {
    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '32px',
          padding: '12px',
          fontFamily: 'Prentendard',
          fontSize: '24px',
          fontWeight: '600',
          color: '#000000',
          width: '100%',
        }}
      >
        <StyledChevron />
        목표 작성
      </Box>
    );
  };

  const renderForm = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '12px 0',
          width: '100%',
          gap: '16px',
        }}
      >
        <StyledTextFiled placeholder="제목" onChange={(e) => setTitle(e.target.value)} />
        <StyledSelect value={category} onChange={(e) => setCategory(e.target.value as string)}>
          {CATEGORIE_LIST.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </StyledSelect>
        <StyledImageBox $image={image ? URL.createObjectURL(image) : ''}>
          {!image ? (
            <>
              <label htmlFor="upload">이미지 업로드</label>
              <input
                type="file"
                accept="image/*"
                id="upload"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </>
          ) : (
            <></>
          )}
        </StyledImageBox>
        <StyledTextFiled
          placeholder="목표 설명"
          $height="96px"
          multiline
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
    );
  };

  const renderSubmitButton = () => {
    return (
      <Box
        onClick={handleSubmit}
        sx={{
          width: '100%',
          height: '52px',
          borderRadius: '10px',
          background: '#243763',
          color: '#fff',
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontWeight: '600',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        체인 등록
      </Box>
    );
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px 0',
        width: '100%',
        gap: '12px',
      }}
    >
      {renderHeader()}
      {renderForm()}
      {renderSubmitButton()}
    </Container>
  );
};

const StyledChevron = styled(ChevronLeftIcon)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledTextFiled = styled(TextField)<{ $height?: string }>`
  width: 100%;
  height: ${({ $height }) => $height || '48px'};
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px #243763;
  overflow: hidden;

  & .MuiOutlinedInput-root {
    height: ${({ $height }) => $height || '48px'};
    display: flex;
    align-items: flex-start;

    & input {
      height: 100%;
      padding: 0 10px;
      box-sizing: border-box;
    }
    & textarea {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      resize: none;
      box-sizing: border-box;
      width: 100%;
    }

    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: 1px solid #243763;
      box-shadow: none;
    }
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px #243763;

  &:focus {
    border: 1px solid #243763;
  }

  &:hover {
    border: none;
  }

  option {
    padding: 8px 0;
  }
`;

const StyledImageBox = styled(Box)<{ $image: string }>`
  width: 100%;
  height: 352px;
  ${({ $image }) => $image && 'background-image: url(' + $image + ');'}
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  box-shadow: 0px 0px 4px 0px #243763;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    border-color: #243763;
  }

  &:focus-within {
    border-color: #243763;
    box-shadow: 0 0 0 1px #243763;
  }
`;

export default Register;
