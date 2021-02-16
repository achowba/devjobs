import styled from "styled-components";

import Brand from "../Brand/Brand";
import ToggleTheme from "../../UI/ToggleTheme/ToggleTheme";
import headerBg from "../../../assets/img/desktop/bg-pattern-header.svg";

const StyledHeader = styled.div`
    align-items: center;
    background-image: url(${headerBg});
    background-size: cover;
    border-bottom-left-radius: 200px;
    display: flex;
    height: 140px;
    justify-content: space-between;
    padding: 0 130px;
    width: calc(100% - 260px);

    @media (max-width: 1200px) {
        padding: 0 50px;
        width: calc(100% - 100px);
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Brand />
            <ToggleTheme />
        </StyledHeader>
    );
};

export default Header;
