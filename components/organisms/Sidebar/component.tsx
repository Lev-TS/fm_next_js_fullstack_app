import Image from "next/image";

import logo from "@/assets/images/logo.png";

import Card from "@/components/atoms/Card/component";
import SidebarLink from "@/components/molecules/SidebarLink/component";

import { SIDE_BAR_LINKS } from "./constants";

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div>
      {SIDE_BAR_LINKS.map((sideBarLink) => (
        <SidebarLink key={sideBarLink.label} {...sideBarLink} />
      ))}
    </Card>
  );
};

export default Sidebar;
