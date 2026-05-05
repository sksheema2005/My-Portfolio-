import React from "react";
import "./Button.scss";

import {Button as MuiButton} from "@material-ui/core";

export default function Button({text, className, href, newTab, onClick}) {
  return (
    <div className={className}>
      <MuiButton
        variant="contained"
        color="primary"
        href={href}
        target={newTab ? "_blank" : undefined}
        onClick={onClick}
        style={{
          borderRadius: "12px",
          padding: "10px 25px",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "16px",
          boxShadow: "0 4px 14px 0 rgba(94, 93, 240, 0.39)",
        }}
      >
        {text}
      </MuiButton>
    </div>
  );
}
