"use client";
import * as React from "react";
import { NavMain } from "@/components/navbar/nav-main";
import { NavSecondary } from "@/components/navbar/nav-secondary";
import { NavUser } from "@/components/navbar/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { userSideBarData as user } from "@/config/user-data";
import { companyData as company } from "@/config/company-data";
import {
  IconDevices,
  IconServerSpark,
  IconApps,
  IconStack,
  IconBuildingStore,
  IconUsers,
  IconSend,
  IconLifebuoy,
  IconPlus,
  IconMapPin,
  IconLockAccess,
  IconSettings,
  IconPackage,
  IconUserCircle,
  IconUserPlus,
  IconUsersGroup,
  IconPuzzle,
  IconShoppingCart,
  IconFileCertificate,
  IconMessage,
} from "@tabler/icons-react";

const data = {
  navMain: [
    {
      title: "Business",
      url: "/business",
      icon: IconBuildingStore,
      items: [
        {
          title: "Create",
          url: "#",
          icon: IconPlus,
        },
        {
          title: "Locations",
          url: "#",
          icon: IconMapPin,
        },
        {
          title: "Staff",
          url: "#",
          icon: IconUsers,
        },
        {
          title: "Roles & Permissions",
          url: "#",
          icon: IconLockAccess,
        },
        {
          title: "Settings",
          url: "#",
          icon: IconSettings,
        },
        {
          title: "Products",
          url: "#",
          icon: IconPackage,
        },
      ],
    },
    {
      title: "Members",
      url: "/members",
      icon: IconUsers,
      items: [
        {
          title: "All Members",
          url: "#",
          icon: IconUserCircle,
        },
        {
          title: "Invite",
          url: "#",
          icon: IconUserPlus,
        },
        {
          title: "Teams",
          url: "#",
          icon: IconUsersGroup,
        },
      ],
    },
    {
      title: "Chats",
      url: "/chats",
      icon: IconMessage,
      items: [
        {
          title: "All Members",
          url: "#",
          icon: IconUserCircle,
        },
        {
          title: "Invite",
          url: "#",
          icon: IconUserPlus,
        },
        {
          title: "Teams",
          url: "#",
          icon: IconUsersGroup,
        },
      ],
    },
    {
      title: "Nodes",
      url: "/nodes",
      icon: IconStack,
      isActive: true,
      items: [
        {
          title: "Register Node",
          url: "#",
          icon: IconPlus,
        },
        {
          title: "Status",
          url: "#",
          icon: IconServerSpark,
        },
      ],
    },
    {
      title: "Devices",
      url: "/devices",
      icon: IconDevices,
      items: [
        {
          title: "All Devices",
          url: "#",
          icon: IconDevices,
        },
        {
          title: "Add Device",
          url: "#",
          icon: IconPlus,
        },
        {
          title: "Telemetry",
          url: "#",
          icon: IconStack,
        },
      ],
    },
    {
      title: "Services",
      url: "/services",
      icon: IconServerSpark,
      items: [
        {
          title: "Running",
          url: "#",
          icon: IconServerSpark,
        },
        {
          title: "Available",
          url: "#",
          icon: IconApps,
        },
        {
          title: "Templates",
          url: "#",
          icon: IconPuzzle,
        },
      ],
    },
    {
      title: "Plugins",
      url: "/plugins",
      icon: IconApps,
      items: [
        {
          title: "Installed",
          url: "#",
          icon: IconPuzzle,
        },
        {
          title: "Marketplace",
          url: "#",
          icon: IconShoppingCart,
        },
        {
          title: "License",
          url: "#",
          icon: IconFileCertificate,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: IconLifebuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: IconSend,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href={company.href} className="flex items-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground dark:bg-muted/70 dark:text-white border-2 border-border/40 dark:border-border/60">
                  <company.icon className="!size-5" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{company.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {company.plan}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}