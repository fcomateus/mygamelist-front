import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.header`
    width: 100%;
    height: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 24px 31px;

    //background-color: ${({ theme }) => theme.COLORS.PURPLE_1};
    background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.PURPLE_1} 0%, #000000 1152.08%);

    grid-area: header;

    > div {
        width: 500px;
    }
`;

export const Menu = styled.menu`
    display: flex;
    align-items: center;
    gap: 54px;
`;

export const ProfileImage = styled(Link)`
    display: flex;
    align-items: center;
    gap: 24px;

    > img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }
`