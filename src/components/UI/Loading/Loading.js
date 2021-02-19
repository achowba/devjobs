import styled, { keyframes, withTheme } from "styled-components";

const Rotate = keyframes`
    0% { transform: translate(-50%,-50%) rotate(0deg); }
    100% { transform: translate(-50%,-50%) rotate(360deg); }
`;

const OuterWrapper = styled.div`
    background: transparent;
    height: 50px;
    margin-bottom: 20px;
    width: 50px;
`;

const InnerWrapper = styled.div`
    backface-visibility: hidden;
    height: 100%;
    position: relative;
    /* transform: translateZ(0) scale(1);
    transform-origin: 0 0; */
    width: 100%;

    & div {
        animation: ${Rotate} 1s linear infinite;
        border: 15px solid ${({theme}) => theme.button.secondary};
        border-radius: 50%;
        border-top-color: transparent;
        height: 100%;
        position: absolute;
        top: 60px;
        width: 100%;
    }
`;

const Loading = () => {
    return (
        <OuterWrapper>
            <InnerWrapper>
                <div></div>
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default withTheme(Loading);
