import React from 'react';
import styled from "styled-components";

export const NavigationLeft = () => {
    return (
        <StyledNavLeft>

        </StyledNavLeft>
    );
};

const StyledNavLeft = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 90px;
  height: 100vh;
  background-color: #fff;
`