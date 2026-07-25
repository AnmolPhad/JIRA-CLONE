import {
  Kanban,
  Settings,
  User,
  Reports,
} from "../icons";

export const sidebarMenus = {
  PROJECT_LEAD: {
    mainMenu: [
      {
        title: "Dashboard",
        icon: Kanban,
        link: "/project/dashboard",
      },
      {
        title: "Kenben Board",
        icon: Kanban,
        link: "/project",
      },
      {
        title: "Members",
        icon: User,
        link: "/project/members",
      },
      {
        title: "Reports",
        icon: Reports,
        link: "/project/reports",
      },
      {
        title: "Project Settings",
        icon: Settings,
        link: "/project/settings",
      },
    ],

    bottomMenu: [
      {
        title: "Profile",
        icon: User,
        link: "/project/profile",
      },
      {
        title: "Logout",
        icon: User,
        link: "/",
      },
    ],
  },

  PROJECT_MEMBER: {
    mainMenu: [
      {
        title: "Dashboard",
        icon: Kanban,
        link: "/project/dashboard",
      },
      {
        title: "Kanban Board",
        icon: Kanban,
        link: "/project",
      },
      {
        title: "Members",
        icon: User,
        link: "/project/members",
      },
    
  
    ],

    bottomMenu: [
      {
        title: "Profile",
        icon: User,
        link: "/project/profile",
      },
      {
        title: "Logout",
        icon: User,
        link: "/",
      },
    ],
  },
};