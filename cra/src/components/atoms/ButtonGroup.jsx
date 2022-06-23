import { useState ,useEffect, useRef } from "react";
import styled , { css } from "styled-components";

function ButtonGroup({ children, type }) {
    const elGroup = useRef(null);
    useEffect(() => {
        const elChildren = elGroup.current.children;
        const childLeng = elChildren.length;
        for(let i = 0; i < childLeng; i++) {
            let eachEl = elChildren[i];
            eachEl.addEventListener("click",(e) => {
                if(type === "checkbox") {
                    if(e.target.classList.contains("active")) {
                        e.target.classList.remove("active");
                    } else {
                        e.target.classList.add("active");
                    }
                } else if (type === "radio") {
                    const siblings = e.target.parentElement.children;
                    for(let j = 0; j < siblings.length; j++ ) {
                        siblings[j].classList.remove('active');
                    }
                    e.target.classList.add("active");
                }
            })
        }

        if(type === "dropDown") {
            elGroup.current.querySelector("button").addEventListener("click",(e) => {
                let that = e.target;
                if(that.classList.contains("on")) {
                    that.classList.remove("on");
                } else {
                    that.classList.add("on");
                }
            })
        }
        
    },[elGroup])

    const StyledBtnGroup = styled.div`
        display: ${prop => prop.type === "dropDown" ? "block" : "flex"};
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        
        ${prop => prop.type === "dropDown" && css`
            max-width: 300px;
            margin: 0 auto;
            text-align: center;
        `}
    `;

    return (
    <StyledBtnGroup ref={elGroup} type={type}>
      {children}
    </StyledBtnGroup>
    );
}

export default ButtonGroup;
