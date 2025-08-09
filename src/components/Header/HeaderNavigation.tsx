import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
import { googleDriveService, GoogleDrivePdf } from "@/utils/googleDriveApi";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Store", to: "/store" },
  { label: "Media", to: "/media" },
  { label: "Downloads", to: "/downloads", isDropdown: true },
  { label: "Donate", to: "/donate" },
  { label: "Apply Now!", to: "/apply" },
];

const DEGREES_NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Store", to: "/store" },
  { label: "Degrees", to: "/degrees", isDropdown: true },
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

const DEGREE_LEVELS = [
  { title: "Associate of Arts", level: "associate" as const, href: "/degrees/associate-of-arts" },
  { title: "Bachelor of Arts", level: "bachelor" as const, href: "/degrees/bachelor-of-arts" },
  { title: "Master of Arts", level: "master" as const, href: "/degrees/master-of-arts" },
  { title: "Doctorate", level: "doctorate" as const, href: "/degrees/doctorate" },
];

interface Props {
  isDark: boolean;
}

const HeaderNavigation: React.FC<Props> = ({ isDark }) => {
  const location = useLocation();
  const isDegreesPage = location.pathname.startsWith('/degrees');
  const currentNavItems = isDegreesPage ? DEGREES_NAV_ITEMS : NAV_ITEMS;

  return (
    <NavigationMenu className="hidden md:flex flex-1 items-center justify-center relative z-20" style={{ height: 40 }}>
      <NavigationMenuList className="flex items-center gap-9">
        {currentNavItems.map((item) => {
          const active = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
          
          let colorClass = "";
          if (!isDark) {
            colorClass = active ? "text-ncu-blue" : "text-gray-700 hover:text-ncu-gold";
          } else {
            colorClass = active ? "text-ncu-gold" : "text-gray-200 hover:text-ncu-blue";
          }

          if (item.label === "Downloads") {
            return <DownloadsDropdown key={item.label} colorClass={colorClass} />;
          }
          if (item.label === "Degrees") {
            return <DegreesDropdown key={item.label} colorClass={colorClass} />;
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

const DownloadsDropdown: React.FC<{ colorClass: string }> = ({ colorClass }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger className={cn("bg-transparent", colorClass)}>
      Downloads
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

const DegreesDropdown: React.FC<{ colorClass: string }> = ({ colorClass }) => {
  const [courses, setCourses] = useState<Record<string, GoogleDrivePdf[]>>({});
  const { degreeLevel } = useParams<{ degreeLevel?: string }>();
  const location = useLocation();

  useEffect(() => {
    const fetchAllCourses = async () => {
      const allCourses: Record<string, GoogleDrivePdf[]> = {};
      for (const level of DEGREE_LEVELS) {
        const pdfs = await googleDriveService.fetchPdfsForDegree(level.level);
        allCourses[level.level] = pdfs;
      }
      setCourses(allCourses);
    };
    fetchAllCourses();
  }, []);

  const currentDegreeKey = degreeLevel ? degreeLevel.replace(/-/g, '_') : null;
  const isGeneralDegreesPage = location.pathname === '/degrees';

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={cn("bg-transparent", colorClass)}>
        Degrees
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
          {DEGREE_LEVELS.map((level) => (
            <li key={level.title}>
              <NavigationMenuLink asChild>
                <Link to={level.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="text-sm font-medium leading-none">{level.title}</div>
                  <div className="mt-2 space-y-1">
                    {(isGeneralDegreesPage || currentDegreeKey === level.level) && courses[level.level]?.map(course => (
                      <Link key={course.id} to={`/degrees/${level.href.split('/').pop()}/${course.slug}`} className="block text-sm text-muted-foreground hover:text-foreground">
                        {course.name}
                      </Link>
                    ))}
                  </div>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
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