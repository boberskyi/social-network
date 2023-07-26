import React from 'react';
import styled from "styled-components";

export const Dialogs = () => {
    return (
        <StyledDialogs>
            <div>Dialog 1</div>
            <div>Dialog 2</div>
            <div>Dialog 3</div>
            <div>Dialog 4</div>
            <div>Dialog 5</div>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`