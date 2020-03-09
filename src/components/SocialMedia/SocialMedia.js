import React from "react";
import styled from "styled-components";

import facebook from "../Icons/facebook.png";
import instagram from "../Icons/instagram.png";
import pinterest from "../Icons/pinterest.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

const Icon = styled.img`
  width: 26px;
  padding-right: 6px;
  cursor: pointer;
`;

const SocialMedia = props => {
  return (
    <Container>
      <h5>Stay Connected</h5>
      <SocialIcons>
        <a href="https://www.facebook.com/ModernTrousseau/" target="_blank">
          <Icon id="fb" src={facebook} alt="Facebook Icon" />
        </a>
        <a href="https://www.instagram.com/moderntrousseaudc/" target="_blank">
          <Icon id="in" src={instagram} alt="Instagram Icon" />
        </a>
        <a href="https://www.pinterest.com/moderntrousseau/" target="_blank">
          <Icon id="pi" src={pinterest} alt="Pinterest Icon" />
        </a>
      </SocialIcons>
    </Container>
  );
};

export default SocialMedia;
