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
                    console.log(e.target);
                    eachEl.classList.remove("active");
                    e.target.classList.add("active");
                }
            })
        }
    },[elGroup])

    const StyledBtnGroup = styled.div`

    `;

    return (
    <StyledBtnGroup ref={elGroup} type={type}>
      {children}
    </StyledBtnGroup>
    );
}

export default ButtonGroup;
