import {
  SidebarIcons,
  SideBarLinkProps,
} from "@/components/molecules/SidebarLink/types";
import { PageRoutes } from "@/constants/routes";

export const SIDE_BAR_LINKS: SideBarLinkProps[] = [
  {
    label: "Home",
    icon: SidebarIcons.Grid,
    link: PageRoutes.Home,
  },
  {
    label: "Calendar",
    icon: SidebarIcons.Calendar,
    link: PageRoutes.Calendar,
  },
  {
    label: "Profile",
    icon: SidebarIcons.User,
    link: PageRoutes.Profile,
  },
  {
    label: "Settings",
    icon: SidebarIcons.Settings,
    link: PageRoutes.Settings,
  },
];
