import { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 50px;
    padding: 10px;
    width: 100%;

    &:not(:last-child) {
        border-right: 2px solid #ececec;
    }
`;

const StyledInput = styled.input`
    border: none;
    color: #555555;
    font-size: 1.1rem;
    height: 25px;
    outline: none;
    padding: 10px;
    width: 100%;

    ::placeholder {
        color: #cccccc;
        font-weight: 400;
        font-size: 0.9rem;
        opacity: 1;
    }
`;

const SearchIcon = styled.img`
    margin: 0 10px;
    width: 20px;
`;

class SearchInput extends Component {
    render() {
        return (
            <>
                <InputWrapper>
                    <SearchIcon src={this.props.iconSrc} />
                    <StyledInput
                        type="text"
                        placeholder={this.props.placeHolder}
                    />
                </InputWrapper>
            </>
        );
    }
}

export default SearchInput;
