import Styled from 'styled-components';

export const CardContainer = Styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s ease-out;
    margin: 20px 0px;
    text-align: center;
    background-color: #f5f5f5;
    &:hover{
        box-shadow: 0 1px 5px rgba(0,0,0,0.1);
    }
`;

export const CardMediaContainer = Styled.div`
    width: 100%;
    position: relative;
`;

export const CardMedia = Styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const CardCategory = Styled.p`
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 15px;
    position: absolute;
    bottom: 5px;
    background-color: rgba(0,0,0,0.5);
`;

export const CardTitle = Styled.h3`
    color: #222;
    font-size: 1rem;
    padding: 5px;
    font-weight: 700;
    margin:10px;
    text-align: justify;
`;

export const CardDesc = Styled.p`
    color: #333;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: justify;
    padding: 5px;
    margin:10px;
`;
