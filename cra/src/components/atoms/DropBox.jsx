import React, { useEffect, useRef } from 'react'
import styled , { css } from 'styled-components';

function DropBox({children ,animate}) {
    const elUl = useRef(null);
    let ulHeight = 0;

    useEffect(() => {
        ulHeight = elUl.current.clientHeight;
    },[elUl]);

    const StyledUl = styled.ul`
        list-style: none;
        position: absolute;
        display: none;
        width: 100%;
        left: 0; top: 100%;
        padding: 0;
        margin: 0;
        z-index: 2;
        transition: .3s ease;
        .on + & {
            display: block;
        }

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