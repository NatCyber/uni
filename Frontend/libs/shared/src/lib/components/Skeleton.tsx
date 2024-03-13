import React from "react";
import "../Skeleton.css";

interface SkeletonTextProps {
  variant: "text";
}

interface SkeletonShapeProps {
  variant: "rect" | "circle";
  width: number;
  height: number;
  borderRadius: string;
}

type SkeletonProps = SkeletonTextProps | SkeletonShapeProps;

export default function Skeleton(props: SkeletonProps) {
  let style: any = {};
  if (props.variant !== "text") {
    style.width = props.width;
    style.height = props.height;
    style.borderRadius = props.borderRadius;
  }

  return <div className={`Skeleton Skeleton-${props.variant}`} style={style} />;
}
