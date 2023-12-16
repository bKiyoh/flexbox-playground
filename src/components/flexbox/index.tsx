import React from "react";
import style from "@/components/flexbox/flexbox.module.css";

export function Flexbox() {
  return (
    <div className={style.container}>
      <div style={{ backgroundColor: "#80ffdb" }}></div>
      <div style={{ backgroundColor: "#64dfdf" }}></div>
      <div style={{ backgroundColor: "#48bfe3" }}></div>
      <div style={{ backgroundColor: "#5390d9" }}></div>
      <div style={{ backgroundColor: "#6930c3" }}></div>
    </div>
  );
}
