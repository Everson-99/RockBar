import styled from 'styled-components';

export const Petflix = styled.div`
  margin-left: 38%;
`;

export const Imglogo = styled.img`
  width: 320px;
  height: 250px;
  align-items: center;
  justify-content: center;
`;

export const PetflixTitle = styled.div`
  margin-top: 7%;
  display: flex;
  color: aliceblue;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 50px;
`;

export const ContentPetFlix = styled.div`
  display: flex;
`;

export const ImgCat = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10px;
  margin-right: 55px;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgDog = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10px;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
