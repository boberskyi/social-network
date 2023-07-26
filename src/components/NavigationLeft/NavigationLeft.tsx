import React from 'react';
import styled from "styled-components";
import {TbHexagonLetterS} from "react-icons/tb";
import {ImNewspaper} from "react-icons/im";
import {MdGroups, MdOutlineForum, MdOutlineViewTimeline} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";
import {TfiGallery} from "react-icons/tfi";
import {LiaVideoSolid} from "react-icons/lia";
import {Link, NavLink} from "react-router-dom";

export const NavigationLeft = () => {
    return (
        <StyledNavLeft>
            <StyledNavLeftTop to={"/"}>
                <TbHexagonLetterS />
            </StyledNavLeftTop>

            <StyledNavLeftBtm>
                <StyledNavLeftLink to={"/dialogs"}>
                    <MdOutlineForum/>
                    <StyledNavLeftLinkTitle>Forums</StyledNavLeftLinkTitle>
                </StyledNavLeftLink>
                <StyledNavLeftLink to={"/posts"}>
                    <ImNewspaper/>
                    <StyledNavLeftLinkTitle>Newsfeed</StyledNavLeftLinkTitle>
                </StyledNavLeftLink>
                <StyledNavLeftLink to={"/"}>
                    <MdOutlineViewTimeline/>
                    <StyledNavLeftLinkTitle>Member timeline</StyledNavLeftLinkTitle>
                </StyledNavLeftLink>
                <StyledNavLeftLink to={"/"}>
                    <MdGroups/>
                    <StyledNavLeftLinkTitle>Groups</StyledNavLeftLinkTitle>
                </StyledNavLeftLink>
                <StyledNavLeftLink to={"/"}>
                    <FaUserFriends/>
                    <StyledNavLeftLinkTitle>Friends</StyledNavLeftLinkTitle>
                </StyledNavLeftLink>
                <StyledNavLeftLink to={"/"}>
                    <TfiGallery/>
                    <StyledNavLeftLinkTitle>Gallery</StyledNavLeftLinkTitle>
                </StyledNavLeftLink>
                <StyledNavLeftLink to={"/"}>
                    <LiaVideoSolid/>
                    <StyledNavLeftLinkTitle>Videos</StyledNavLeftLinkTitle>
                </StyledNavLeftLink>
            </StyledNavLeftBtm>
        </StyledNavLeft>
    );
};

const StyledNavLeft = styled.header`
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
const StyledNavLeftTop = styled(Link)`
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
const StyledNavLeftBtm = styled.nav`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`
const StyledNavLeftLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #8793a3;
  padding: 15px 0;
  border-bottom: 1px solid rgba(135, 147, 143, .2);
`
const StyledNavLeftLinkTitle = styled.span`
  display: none;
`