import styled, { css } from "styled-components";

export const ThemeWrapper = styled.div`
    align-items: center;
    display: flex;
`;

export const ThemeIcon = styled.img`
    height: 15px;
    width: 15px;

    :first-child {
        margin-right: 20px;
    }

    :last-child {
        margin-left: 20px;
    }
`;

export const ToggleWrapper = styled.div`
    align-items: center;
    background-color: #ffffff;
    border-radius: 30px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: 25px;
    padding: 2px;
    position: relative;
    width: 50px;
`;

export const ToggleButton = styled.div`
    background-color: #606ad7;
    border-radius: 50%;
    cursor: pointer;
    height: 16px;
    left: 30px;
    position: absolute;
    transition: all 0.3s ease;
    width: 16px;

    ${({ isDark }) =>
        isDark &&
        css`
            left: 4px;
        `}
`;
