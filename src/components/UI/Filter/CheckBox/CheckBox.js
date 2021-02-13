import { Component } from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
import { Indicator, Input, Label } from "./CheckBox.styles";

const StyledWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            disabled: false,
        };
    }

    inputCheckedHandler = (e) => {
        this.setState({ checked: e.target.checked });
    };

    render() {
        return (
            <StyledWrapper>
                <Label>
                    <Indicator checked={this.state.checked}/>
                    Full Time Only
                    <Input
                        type="checkbox"
                        value={false}
                        checked={this.state.checked}
                        onChange={this.inputCheckedHandler}
                    />
                </Label>
                <Button type="submit" btnType="secondary">Search</Button>
            </StyledWrapper>
        );
    }
}

export default CheckBox;
