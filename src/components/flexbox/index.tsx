"use client";
import React, { useState } from "react";
import style from "@/components/flexbox/flexbox.module.css";

type FlexDirection = "column" | "column-reverse" | "row" | "row-reverse";

export function Flexbox() {
  const [flexDirection, setFlexDirection] = useState<FlexDirection | undefined>(
    "row"
  );
  const [backgroundColor1, setBackgroundColor1] = useState("#80ffdb");
  const [backgroundColor2, setBackgroundColor2] = useState("#64dfdf");
  const [backgroundColor3, setBackgroundColor3] = useState("#48bfe3");
  const [backgroundColor4, setBackgroundColor4] = useState("#5390d9");
  const [backgroundColor5, setBackgroundColor5] = useState("#6930c3");
  return (
    <div className={style.container} style={{ flexDirection: flexDirection }}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div style={{ backgroundColor: backgroundColor1 }}></div>
      <div style={{ backgroundColor: backgroundColor2 }}></div>
      <div style={{ backgroundColor: backgroundColor3 }}></div>
      <div style={{ backgroundColor: backgroundColor4 }}></div>
      <div style={{ backgroundColor: backgroundColor5 }}></div>
    </div>
  );
}
