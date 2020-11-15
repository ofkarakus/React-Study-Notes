import styled from "styled-components";

export const CardContainer = styled.div`
  width: 15rem;
  height: 25rem;
  border-radius: 10px;
  background-color: #fafafa;
  margin-bottom: 2rem;
  transition: 0.3s;
  box-shadow: 0.3rem 0.3rem 0.6rem gray;
  &:hover {
    transform: scale(1.02)
  } 
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: auto;
`;

export const Poster = styled.img`
  width: 100%;
  height: 83%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.p`
  margin: 1.1rem;
`;

export const Point = styled.p`
  height: 1.5rem;
  width: 2rem;
  background-color: #e57373;
  text-align: center;
  border-radius: 5px;
  margin: 1rem;
`;
