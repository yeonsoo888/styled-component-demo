import React, { useEffect, useRef } from 'react'
import styled , { css } from 'styled-components';

function DropBox({children ,animate}) {
    const elUl = useRef(null);
    let ulHeight = 0;

    useEffect(() => {
        ulHeight = elUl.current.offsetHeight;
        if(animate === "slideDown") {
            elUl.current.style.maxHeight = 0;
            elUl.current.style.opacity = 1;
            elUl.current.style.visibility = "visible";
        }
    },[elUl]);

    const StyledUl = styled.ul`
        list-style: none;
        position: absolute;
        
        ${prop => prop.animate === "slideDown" 
            ? css`
                opacity: 0; visibility: hidden; overflow: hidden;
                .on + & {
                    display: block;
                    max-height: 200px !important;
                }
            ` 
            : css`
                display: none;
                .on + & {
                    display: block;
                }
            `
        }
        width: 100%;
        left: 0; top: 100%;
        padding: 0;
        margin: 0;
        z-index: 2;
        transition: .3s ease;
        
        & li {
            border-bottom: 1px solid #ddd;
            padding: 0.5rem 0;
            cursor: pointer;
            transition: .3s ease;
            &:hover {
                background: #eaeaea;
            }
        }
    `;

  return (
    <StyledUl ref={elUl} animate={animate}>
        {children}
    </StyledUl>
  )
}




export default DropBox