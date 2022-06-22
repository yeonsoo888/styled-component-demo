import React from 'react'
import styled from 'styled-components';

function Button({children , color , background}) {
    const StyledButton = styled.button`
        font-size: 1rem; 
        font-weight: 500;
        color: ${prop => prop.color || "#000"};
        background: ${prop => prop.background || "aqua"};
        border: none;
        border-radius: 5px;
        padding: 0.3rem 1rem; 
        min-width: 50px;
        cursor: pointer;
        & + button {
            margin: 0 0 0 1rem;
        }
    `;

  return (
    <>
        <StyledButton color={color} background={background}>{children}</StyledButton>
    </>
  )
}

export default Button