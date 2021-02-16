import { Component } from "react";
import styled from "styled-components";

import CheckBox from "./CheckBox/CheckBox";
import SearchInput from "./SearchInput/SearchInput";

import searchIcon from "../../../assets/img/desktop/icon-search.svg";
import locationIcon from "../../../assets/img/desktop/icon-location.svg";

const FilterForm = styled.form`
    background-color: ${({ theme }) => theme.jobCard.bg};
    border-radius: 8px;
    box-shadow: ${({ theme }) =>
        theme.isDark ? "unset" : "-10px 10px 20px -20px #d3d3d3"};
    display: grid;
    gap: 20px;
    grid-template-columns: 1.4fr 1fr 1fr;
    margin: -30px auto;
    width: calc(100% - 260px);

    @media (max-width: 1200px) {
        width: calc(100% - 100px);
    }
`;

class Filter extends Component {
    filterSubmitHandler = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <FilterForm onSubmit={this.filterSubmitHandler}>
                <SearchInput
                    iconSrc={searchIcon}
                    placeHolder="Filter by companies, title, expertise..."
                />
                <SearchInput
                    iconSrc={locationIcon}
                    placeHolder="Filter by location..."
                />
                <CheckBox />
            </FilterForm>
        );
    }
}

export default Filter;
