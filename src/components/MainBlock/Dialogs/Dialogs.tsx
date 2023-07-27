import React from 'react';
import styled from "styled-components";
import {DialogsFriendItm} from "./DialogsFriendItm/DialogsFriendItm";
import {Outlet, Route, Routes} from "react-router-dom";
export const Dialogs = () => {
    return (
        <StyledDialogs>
            <StyledDialogsFriends>
                <DialogsFriendItm id={'dfi1'} />
                <DialogsFriendItm id={'dfi2'} />
                <DialogsFriendItm id={'dfi3'} />
                <DialogsFriendItm id={'dfi4'} />
                <DialogsFriendItm id={'dfi5'} />
                <DialogsFriendItm id={'dfi6'} />
                <DialogsFriendItm id={'dfi7'} />
            </StyledDialogsFriends>

            <StyledDialogsMsgs>
                <Outlet />
            </StyledDialogsMsgs>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`
const StyledDialogsFriends = styled.div`
  max-width: 400px;
  min-width: 400px;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

const StyledDialogsMsgs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 30px;
  justify-content: space-between;
`