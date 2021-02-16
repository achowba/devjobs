import styled from "styled-components";

import { DEFAULT_LOGO } from '../../constants/jobs';

export const Card = styled.div`
    background-color: ${({ theme }) => theme.jobCard.bg};
    border-radius: 7px;
    cursor: pointer;
    margin-bottom: 30px;
    padding: 20px 25px;
`;

export const Company = styled.p`
    color: ${({ theme }) => theme.jobCard.company};
`;

export const Divider = styled.div`
    background-color: ${({ theme }) => theme.jobCard.company};
    border-radius: 50%;
    display: grid;
    height: 5px;
    margin: 0 -6px;
    width: 5px;
`;

export const Info = styled.div`
    align-items: center;
    display: grid;
    gap: 0;
    /* grid-template-columns: 1fr 15px 1fr; */
    grid-template-columns: 60% 10% 60%;
    width: fit-content;

    & p {
        color: ${({ theme }) => theme.jobCard.company};
        margin: 0 0 5px 0;
        width: fit-content;
    }
`;

export const Location = styled.p`
    color: ${({ theme }) => theme.jobCard.location};
    font-size: 1.1rem;
    font-weight: 500;
`;

export const Logo = styled.div`
    /* background-size: cover; */
    background: ${({imgSrc}) => imgSrc ? `url(${imgSrc})` : `url(${DEFAULT_LOGO})`};
    background-color: ${({ theme }) => theme.jobCard.bg};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 15px;
    height: 60px;
    margin: -50px 0 20px 0;
    width: 60px;
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.jobCard.title};
    font-size: 1.1rem;
    font-weight: 600;
`;
