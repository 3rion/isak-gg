"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type CSSProperties } from "react";

type Direction = "left" | "right";

interface FloatingHitImageProps
  extends Omit<ImageProps, "onClick" | "onAnimationEnd" | "className"> {
  direction: Direction;
  wrapperClassName: string;
  wrapperStyle?: CSSProperties;
  imageClassName?: string;
}

export default function FloatingHitImage({
  direction,
  wrapperClassName,
  wrapperStyle,
  imageClassName,
  ...imageProps
}: FloatingHitImageProps) {
  const [hitting, setHitting] = useState(false);

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      <Image
        {...imageProps}
        onClick={() => setHitting(true)}
        onAnimationEnd={() => setHitting(false)}
        className={`cursor-pointer select-none ${imageClassName ?? ""} ${
          hitting ? (direction === "left" ? "animate-hit-left" : "animate-hit-right") : ""
        }`}
      />
    </div>
  );
}
