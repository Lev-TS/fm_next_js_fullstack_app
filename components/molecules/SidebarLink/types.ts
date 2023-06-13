import { type Icon } from "react-feather";
import { PageRoutes } from "@/constants/routes";

export enum SidebarIcons {
  Settings = "Settings",
  User = "User",
  Grid = "Grid",
  Calendar = "Calendar",
}

export type SidebarIconNames = keyof typeof SidebarIcons;
export type SidebarIconCollection = { [key in SidebarIconNames]: Icon };

export interface SideBarLinkProps {
  label: keyof typeof PageRoutes;
  icon: SidebarIconNames;
  link: `${PageRoutes}`;
}
