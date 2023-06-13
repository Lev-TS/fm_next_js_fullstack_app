import { type Icon, Settings, User, Grid, Calendar } from "react-feather";

import { SidebarIconNames, SidebarIconCollection } from "./types";

const sidebarIconCollection: SidebarIconCollection = {
  Settings,
  User,
  Grid,
  Calendar,
};

export const getIcon = (name: SidebarIconNames): Icon =>
  sidebarIconCollection[name];
