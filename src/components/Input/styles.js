import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-inline: 20px;

    gap: 8px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-radius: 20px;

    width: 350px;
    height: 50px;

    > input {
        background: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
        
        width: 300px;
        height: 45px;

        outline: none;
        
    }
`;