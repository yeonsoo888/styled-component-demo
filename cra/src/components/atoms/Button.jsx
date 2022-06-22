import React from "react";
import styled from "styled-components";

function Button({ children, color, outline, size, block, active }) {
  const arrBtnSet = [
    {
      name: "primary",
      bgColor: "#0b6efd",
      fntColor: "#fff",
    },
    {
      name: "secondary",
      bgColor: "#6c757d",
      fntColor: "#fff",
    },
    {
      name: "success",
      bgColor: "#198753",
      fntColor: "#fff",
    },
    {
      name: "danger",
      bgColor: "#dd3444",
      fntColor: "#fff",
    },
    {
      name: "warning",
      bgColor: "#ffc007",
      fntColor: "#050401",
    },
    {
      name: "info",
      bgColor: "#04caf0",
      fntColor: "#050401",
    },
    {
      name: "light",
      bgColor: "#f8f9fa",
      fntColor: "#050401",
    },
    {
      name: "dark",
      bgColor: "#212529",
      fntColor: "#fff",
    },
  ];

  const StyledButton = styled.button`
    font-size: ${(prop) => {
      if (prop.size === "sm") {
        return "1rem";
      } else {
        return "1.5rem";
      }
    }};

    font-weight: 500;

    color: ${(prop) => {
      if (prop.color !== "") {
        let fntColor;
        return (fntColor = arrBtnSet.map((item) => {
          if (item.name === prop.color && prop.outline) {
            return item.fntColor;
          } else if (item.name === prop.color && !prop.outline) {
            return item.bgColor;
          }
        }));
      }
    }};

    background: ${(prop) => {
      if (prop.color !== "") {
        let bgColor;
        return (bgColor = arrBtnSet.map((item) => {
          if (item.name === prop.color && prop.outline) {
            return item.bgColor;
          } else if (item.name === prop.color && !prop.outline) {
            return "transparent";
          }
        }));
      }
    }};

    border: ${(prop) => {
      if (!prop.outline) {
        let bdColor;
        return (bdColor = arrBtnSet.map((item) => {
          if (item.name === prop.color) {
            return `1px solid ${item.bgColor}`;
          }
        }));
      } else {
        return "none";
      }
    }};

    border-radius: 5px;
    padding: 0.3rem 1rem;
    min-width: 50px;

    width: ${(prop) => {
      if (!prop.block) {
        return "100%";
      }
    }};

    filter: ${(prop) => {
      if (!prop.active && prop.outline) {
        return "brightness(85%)";
      }
    }};

    cursor: pointer;
    transition: .3s ease;

    &:hover {
      filter: brightness(85%);
    }
    & + button {
      margin: 0 0 0 1rem;
    }
  `;

  return (
    <>
      <StyledButton
        color={color}
        outline={!outline}
        size={size}
        block={!block}
        active={!active}
      >
        {children}
      </StyledButton>
    </>
  );
}

export default Button;
