import { Component } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox/CheckBox";
import SearchInput from "./SearchInput/SearchInput";

import searchIcon from "../../../assets/img/desktop/icon-search.svg";
import locationIcon from "../../../assets/img/desktop/icon-location.svg";

const FilterForm = styled.form`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: -10px 10px 20px -20px #d3d3d3;
    display: flex;
    margin: -30px auto;
    width: calc(100% - 260px);
`;

class Filter extends Component {
    filterSubmitHandler = (e) => {
        e.preventDefault();
    }

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
