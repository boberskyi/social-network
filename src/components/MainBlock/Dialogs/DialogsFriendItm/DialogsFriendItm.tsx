import React from 'react';
import avatar from "../avatar.png";
import {NavLink} from "react-router-dom";
import roundShape from "../ava_round_shape.png";
import shape from "../ava_shape.png";
import styled from "styled-components";

type DialogsFriendItmPropsType = {
    id: string
}
export const DialogsFriendItm:React.FC<DialogsFriendItmPropsType> = (props) => {
    return (
        <StyledDialogsFriendItm to={`/dialogs/${props.id}`}>
            <StyledDialogsFriendItmLeft>
                <StyledDialogsAvatar src={avatar} alt="Avatar" />
            </StyledDialogsFriendItmLeft>
            <StyledDialogsFriendItmRight>
                <StyledDialogsFriendName>Name Surname</StyledDialogsFriendName>
                <StyledDialogsFriendLastOnline>2 days ago</StyledDialogsFriendLastOnline>
            </StyledDialogsFriendItmRight>
        </StyledDialogsFriendItm>
    );
}


const StyledDialogsFriendItm = styled(NavLink)`
  width: 100%;
  padding: 15px 0;
  margin-top: 3px;
  overflow: visible;
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  display: flex;

  &.active {
    background-color: rgba(0, 186, 255, 0.07);
  }
`
const StyledDialogsFriendItmLeft = styled.span`
  position: relative;
  margin-right: 25px;
  margin-left: 20px;
  
  &:before {
    content: url(${roundShape});
    position: absolute;
    top: -7px;
    left: -7px;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  &:after {
    position: absolute;
    top: -7px;
    left: -7px;
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    content: url(${shape});
  }
`
const StyledDialogsAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const StyledDialogsFriendItmRight = styled.span`
  display: flex;
  flex-direction: column;
`
const StyledDialogsFriendName = styled.span`
  
`
const StyledDialogsFriendLastOnline = styled.span`
  
`