import styled from "styled-components";

export const Wrapper = styled.div`
    margin: -40px auto;
    width: 50%;
`;

export const TopBar = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.jobCard.bg};
    border-radius: 7px;
    display: grid;
    grid-template-columns: 130px 1fr 1fr;
    margin-bottom: 30px;
`;

export const CompanyName = styled.div`
    padding: 15px 35px;

    & > p:first-child {
        color: ${({ theme }) => theme.jobCard.title};
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0 0 10px 0;
    }

    & > p:nth-child(2) {
        color: ${({ theme }) => theme.jobCard.company};
        font-size: 0.8rem;
        font-weight: 500;
        margin: 0;
    }
`;

export const CompanyLogo = styled.div`
    background-color: white;
    background-image: ${({ imgSrc }) => `url(${imgSrc})`};
    background-size: cover;
    border-radius: 7px 0 0 7px;
    height: 130px;
    overflow: hidden;
    width: 130px;
`;

export const SiteLink = styled.a`
    background: #efeffb;
    border-radius: 5px;
    color: #5964e0;
    font-size: 0.9rem;
    font-weight: 600;
    justify-self: end;
    margin-right: 30px;
    padding: 10px 23px;
`;

export const FlexWrap = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding: 10px 20px;
`;
