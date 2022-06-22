import { useState ,useEffect, useRef } from "react";
import styled from "styled-components";

function ButtonGroup({ children, type }) {
    const elGroup = useRef(null);
    const [activeNum,setActiveNum] = useState(0);
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
                } 
                if (type === "radio") {
                    const siblings = e.target.parentElement.children;
                    for(let j = 0; j < siblings.length; j++ ) {
                        siblings[j].classList.remove('active');
                    }
                    e.target.classList.add("active");
                }
            })
        }
    },[elGroup])

    const StyledBtnGroup = styled.div`
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    `;

    return (
    <StyledBtnGroup ref={elGroup} type={type}>
      {children}
    </StyledBtnGroup>
    );
}

export default ButtonGroup;
