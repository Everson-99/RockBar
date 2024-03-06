import styled from 'styled-components';

export const Petflix = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
`;

export const Imglogo = styled.img`
  width: 100%;
  height: auto;
  max-width: 320px;
  margin-bottom: 20px;
`;

export const PetflixTitle = styled.div`
  margin-top: 7%;
  color: aliceblue;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentPetFlix = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImgCat = styled.img`
  width: 100%;
  height: auto;
  max-width: 240px;
  border-radius: 10px;
  margin: 0 10px 20px;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgDog = styled.img`
  width: 100%;
  height: auto;
  max-width: 240px;
  border-radius: 10px;
  margin: 0 10px 20px;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
