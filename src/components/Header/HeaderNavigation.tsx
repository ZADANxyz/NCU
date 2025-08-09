import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Store", to: "/store" },
  { label: "Media", to: "/media" },
  { label: "Downloads", to: "/downloads", isDropdown: true },
  { label: "Donate", to: "/donate" },
  { label: "Apply Now!", to: "/apply" },
];

const DOWNLOAD_ITEMS = [
  { title: "Student Handbook", href: "/downloads/student-handbook" },
  { title: "Tuition & Fees", href: "/downloads/tuition-fees" },
  { title: "Graduate Studies Notebook", href: "/downloads/graduate-studies" },
  { title: "Course Catalogue", href: "/downloads/course-catalogue" },
];

interface Props {
  isDark: boolean;
}

const HeaderNavigation: React.FC<Props> = ({ isDark }) => {
  const location = useLocation();

  return (
    <NavigationMenu className="hidden md:flex flex-1 items-center justify-center relative z-20" style={{ height: 40 }}>
      <NavigationMenuList className="flex items-center gap-9">
        {NAV_ITEMS.map((item) => {
          const active = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
          
          let colorClass = "";
          if (!isDark) {
            colorClass = active ? "text-ncu-blue" : "text-gray-700 hover:text-ncu-gold";
          } else {
            colorClass = active ? "text-ncu-gold" : "text-gray-200 hover:text-ncu-blue";
          }

          if (item.isDropdown) {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger className={cn("bg-transparent", colorClass)}>
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[250px]">
                    {DOWNLOAD_ITEMS.map((component) => (
                      <ListItem key={component.title} to={component.href} title={component.title} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild>
                <Link
                  to={item.to}
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent", colorClass)}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  { to: string } & React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default HeaderNavigation;