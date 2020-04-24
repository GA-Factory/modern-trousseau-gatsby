import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from '../Icons/FAIcon';

const DropdownSection = styled.div`
  font-family: "Raleway";
  background-color: ${props => props.theme.colors.backgroundGray};
  color: ${props => props.theme.colors.nearBlack};
  display: block;
  width:100%;
  max-width: 410px;
`;

const SelectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UpDownChevronBox = styled.div`
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const Chevrons = styled(Icons)`
  width: 5px;
`;

const Selected = styled.ul`
  width: 100%;
  padding: 0 10px;
  position: relative;
  &:first-child {
    /* border: 1px black solid; */
    font-family: "Raleway";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  }

  @media only screen and (min-width: 600px) {
    max-width: 410px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 21px;
    line-height: 25px;
  }
`;

const Items = styled.li`
  z-index: 1;
  padding: 5px 10px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  &:hover {
    color: white;
    background-color: ${props => props.theme.colors.darkGray};
    cursor: pointer;
  }

  @media only screen and (min-width: 600px) {
    max-width: 410px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
  }
`;

class SelectDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      active: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  select = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.title,
    });
    this.toggle();
  };

  render() {
    const selections = this.props.option;
    const Dropdown = selections.map((item) => (
        <Items key={item} title={item} onClick={this.select}>
          {item}
        </Items>
      ));

    return (
      <DropdownSection>
        <ul>
          <Selected onClick={this.toggle}>
            <SelectionDiv>
              {this.state.title}
              <UpDownChevronBox>
                <Chevrons name={['fas', 'chevron-up']} size="xs" />
                <Chevrons name={['fas', 'chevron-down']} size="xs" />
              </UpDownChevronBox>
            </SelectionDiv>
          </Selected>

          {this.state.active === true && Dropdown}
        </ul>
      </DropdownSection>
    );
  }
}

export default SelectDropdown;
