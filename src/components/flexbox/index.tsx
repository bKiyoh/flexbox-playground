"use client";
import React, { useEffect, useState } from "react";
import style from "@/components/flexbox/flexbox.module.css";
import { FlexDirection, JustifyContent } from "@/types";

type PageProps = {
  flexDirection: FlexDirection;
  justifyContent: JustifyContent;
};

export function Flexbox(props: PageProps) {
  const [flexDirection, setFlexDirection] = useState<FlexDirection | undefined>(
    props.flexDirection
  );
  const [justifyContent, setJustifyContent] = useState<
    JustifyContent | undefined
  >(props.justifyContent);

  const [backgroundColor1, setBackgroundColor1] = useState("#80ffdb");
  const [backgroundColor2, setBackgroundColor2] = useState("#64dfdf");
  const [backgroundColor3, setBackgroundColor3] = useState("#48bfe3");
  const [backgroundColor4, setBackgroundColor4] = useState("#5390d9");
  const [backgroundColor5, setBackgroundColor5] = useState("#6930c3");

  useEffect(() => {
    setFlexDirection(props.flexDirection);
  }, [props.flexDirection]);
  useEffect(() => {
    setJustifyContent(props.justifyContent);
  }, [props.justifyContent]);

  return (
    <div
      className={style.container}
      style={{ flexDirection: flexDirection, justifyContent: justifyContent }}
    >
      <div style={{ backgroundColor: backgroundColor1 }}></div>
      <div style={{ backgroundColor: backgroundColor2 }}></div>
      <div style={{ backgroundColor: backgroundColor3 }}></div>
      <div style={{ backgroundColor: backgroundColor4 }}></div>
      <div style={{ backgroundColor: backgroundColor5 }}></div>
    </div>
  );
}
