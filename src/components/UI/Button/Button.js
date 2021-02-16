import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${({ theme, btnType }) => `${theme.button[btnType]}`};
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    height: 40px;
    line-height: 1.1rem;
    margin-right: 15px;
    outline: none;
    padding: 10px 30px;
    width: fit-content;
`;

const Button = (props) => {
    return (
        <StyledButton btnType={props.btnType}>{props.children}</StyledButton>
    );
};

export default Button;
