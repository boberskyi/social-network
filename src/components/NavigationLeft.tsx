import React from 'react';
import styled from "styled-components";
import {TbHexagonLetterS} from "react-icons/tb";

export const NavigationLeft = () => {
    return (
        <StyledNavLeft>
            <StyledNavLeftTop>
                <TbHexagonLetterS />
            </StyledNavLeftTop>
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
  display: flex;
  flex-direction: column;
`
const StyledNavLeftTop = styled.a`
  background-color: #224ed3;
  text-align: center;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
  color: #fff;
  font-size: 50px;
`