import clsx from "clsx";
import { type FC } from "react";
import { type GlassPaneProps } from "./types";

const GlassPane: FC<GlassPaneProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200 p-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
