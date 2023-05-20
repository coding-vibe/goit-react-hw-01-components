import styled from 'styled-components';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Statisitics
export const Section = styled.section`
display: flex;
justify-content: center;
padding: 100px;

background-color: #EFF3F6;
`

export const Container = styled.div`
width: 60%;
box-shadow: -8px 1px 46px -18px rgba(0, 0, 0, 0.75);

background-color: #FFFFFF;
`

export const Title = styled.h2`
  text-align: center;
  margin: 40px;

  color: #61686E;

  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const List = styled.ul`
display: flex;
`;

export const El = styled.li`
width: calc(100% / 5);
padding: 30px;
text-align: center;

background-color: ${getRandomHexColor};
`;

// Statistics Element
export const Label = styled.span`
display: block;
margin-bottom: 10px;

font-size: 20px;
color: #FFFFFF;
`;

export const Percentage = styled.span`
display: block;

font-size: 30px;
font-weight: 500;
color: #FFFFFF;
`;