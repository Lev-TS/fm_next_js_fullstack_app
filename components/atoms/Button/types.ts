import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { buttonClasses } from "./helpers";

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonClasses> {}
