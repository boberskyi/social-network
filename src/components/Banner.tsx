import React from 'react';
import styled from "styled-components";

export const TopSection = () => {
    return (
        <StyledTopSection>

        </StyledTopSection>
    );
};

const StyledTopSection = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  padding: 180px 35px 35px 50px;
  position: relative;
  margin-bottom: 30px;
  background-image: url(https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/buddypress/members/1/cover-image/60b0724fc9a1a-bp-cover-image.jpg);

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top,rgba(0,0,0,.9),transparent);
    border-radius: 8px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`