import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${({ theme, btnType }) => `${theme.button[btnType]}`};
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    height: 40px;
    margin-right: 15px;
    outline: none;
    padding: 10px 30px;
    width: fit-content;
`;

const Button = (props) => {
    return (
        <StyledButton
            btnType={props.btnType}
            onClick={props.clicked ? props.clicked : null}
            {...props}
        >
            {props.children}
        </StyledButton>
    );
};

export default Button;
