"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

import { getIcon } from "./helpers";
import type { SideBarLinkProps } from "./types";

const SideBarLink: FC<SideBarLinkProps> = ({ link, icon }) => {
  const pathName = usePathname();

  let isActive = false;

  if (pathName == link) {
    isActive = true;
  }

  const Icon = getIcon(icon);

  return (
    <Link href={link}>
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "store-violet-600"
        )}
      />
    </Link>
  );
};

export default SideBarLink;
