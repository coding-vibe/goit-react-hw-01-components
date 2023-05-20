import styled from 'styled-components';

// Friend List

export const ContainerList = styled.div`
padding: 40px;

background-color: #FAFAFA;
`

export const List = styled.ul`
display: flex;
flex-direction: column;
row-gap: 40px;
`

export const El = styled.li`
padding: 20px;

background-color: #FFFFFF;

 box-shadow: -8px 1px 46px -18px rgba(0, 0, 0, 0.5);
`

// Friend List Item
export const Container = styled.div`
display: flex;
column-gap: 20px;
position: relative;
`

export const Status = styled.span`
width: 40px;
height: 40px;
position: absolute;
top: 50%;
left: 2%;
transform: translate(-50%, -50%);

border-radius: 50%;
background-color: ${props => props.status ? 'green' : 'red'};
`

export const Avatar = styled.img`
width: 15%;
margin-left: 60px;

border: 1px solid #E7ECF2;
border-radius: 10%;
`

export const Name = styled.p`
display: flex;
align-items: center;

font-size: 40px;
font-weight: 500;
`