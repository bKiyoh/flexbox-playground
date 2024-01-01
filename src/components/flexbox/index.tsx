"use client";
import React, { useEffect, useState } from "react";
import style from "@/components/flexbox/flexbox.module.css";
import { FlexDirection, FlexWrap, JustifyContent } from "@/types";

type PageProps = {
  width: number;
  height: number;
  flexDirection: FlexDirection;
  justifyContent: JustifyContent;
  flexWrap: FlexWrap;
};

export function Flexbox(props: PageProps) {
  const [width, setWidth] = useState<number>(props.width);
  const [height, setHeight] = useState<number>(props.height);
  const [flexDirection, setFlexDirection] = useState<FlexDirection | undefined>(
    props.flexDirection
  );
  const [justifyContent, setJustifyContent] = useState<
    JustifyContent | undefined
  >(props.justifyContent);
  const [flexWrap, setFlexWrap] = useState<FlexWrap | undefined>(
    props.flexWrap
  );

  const [backgroundColor1, setBackgroundColor1] = useState("#80ffdb");
  const [backgroundColor2, setBackgroundColor2] = useState("#64dfdf");
  const [backgroundColor3, setBackgroundColor3] = useState("#48bfe3");
  const [backgroundColor4, setBackgroundColor4] = useState("#5390d9");
  const [backgroundColor5, setBackgroundColor5] = useState("#6930c3");

  useEffect(() => {
    setWidth(props.width);
  }, [props.width]);
  useEffect(() => {
    setHeight(props.height);
  }, [props.height]);
  useEffect(() => {
    setFlexDirection(props.flexDirection);
  }, [props.flexDirection]);
  useEffect(() => {
    setJustifyContent(props.justifyContent);
  }, [props.justifyContent]);
  useEffect(() => {
    setFlexWrap(props.flexWrap);
  }, [props.flexWrap]);

  const createBox = (backgroundColor: string) => (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height,
      }}
    />
  );

  return (
    <div
      className={style.container}
      style={{
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        flexWrap: flexWrap,
      }}
    >
      {createBox(backgroundColor1)}
      {createBox(backgroundColor2)}
      {createBox(backgroundColor3)}
      {createBox(backgroundColor4)}
      {createBox(backgroundColor5)}
    </div>
  );
}
