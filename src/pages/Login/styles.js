import styled from "styled-components";
import backgroundImg from '../../assets/joystick.png';

export const Container = styled.main`
    display: grid;
    grid-template-columns: 600px auto;
    grid-template-areas: "login photo";

`;

export const LoginArea = styled.div`
    grid-area: login;
    height: 100vh;
    
    background: linear-gradient(180deg, ${({ theme}) => theme.COLORS.PURPLE_1} 0%, #000000 295.26%);;
`;

export const Background = styled.div`
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;