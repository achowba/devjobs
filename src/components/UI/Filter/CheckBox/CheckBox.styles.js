import styled from "styled-components";

import checkIcon from '../../../../assets/img/desktop/icon-check.svg';

export const Input = styled.input`
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background-color: #5964e0;
    height: 0;
    width: 0;
    opacity: 0;
    z-index: -1;
`;

export const Label = styled.label`
    align-items: center;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    display: flex;
    position: relative;
    width: 100%;
`;

export const Indicator = styled.div`
    background-color: ${({ checked }) => (checked ? "#5964e0" : "#e6e6e6")};
    background-image: ${({ checked }) => (checked ? `url(${checkIcon})` : 'unset')};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 15px;
    border: none;
    border-radius: 0.2em;
    height: 15px;
    margin: 0 20px;
    padding: 3px;
    position: relative;
    top: 0em;
    width: 15px;
`;
