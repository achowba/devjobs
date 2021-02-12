import styled from "styled-components";

import Brand from "../Brand/Brand";
import headerBg from "../../../assets/img/desktop/bg-pattern-header.svg";
import ToggleTheme from "../../UI/ToggleTheme/ToggleTheme";

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
`;

const Header = () => {
    return (
        <StyledHeader>
            <Brand/>
            <ToggleTheme />
        </StyledHeader>
    );
};

export default Header;
