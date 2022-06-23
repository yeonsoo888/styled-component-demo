import React, { useEffect, useRef , useState } from 'react'
import styled , { css } from 'styled-components';

function DropBox({children ,animate, duration}) {
    const elUl = useRef(null);
    const [ulHeight,setulHeight] = useState(0);
    useEffect(() => {
        setulHeight(elUl.current.clientHeight);
        elUl.current.style.maxHeight = 0;
        elUl.current.style.visibility = "visible";
    },[ulHeight]);

    const StyledUl = styled.ul`
        list-style: none;
        position: absolute;
        width: 100%;
        left: 0; top: 100%;
        padding: 0;
        margin: 0;
        z-index: 2;
        ${prop => prop.animate === "slideDown" 
        ? css`
            overflow: hidden;
            transition: max-height ${duration};
            visibility: hidden;
            .on + & {
                max-height: ${ulHeight}px !important
            };
        `
        : css`
            display: none;
            .on + & {
                display: block;
            };
        `
        };        

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
    <StyledUl ref={elUl} animate={animate} duration={duration}>
        {children}
    </StyledUl>
  )
}




export default DropBox