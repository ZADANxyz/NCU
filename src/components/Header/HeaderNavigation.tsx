import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

const DEFAULT_NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Store", to: "/store" },
  { label: "Media", to: "/media" },
  { label: "Downloads", to: "/downloads" },
  { label: "Donate", to: "/donate" },
  { label: "Apply Now!", to: "/apply" },
];

const DEGREES_NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Store", to: "/store" },
  { label: "Degrees", to: "/degrees" },
  { label: "Downloads", to: "/downloads" },
  { label: "Donate", to: "/donate" },
  { label: "Apply Now!", to: "/apply" },
];

const DEGREE_LEVELS = [
  { title: "Associate of Arts", level: "associate" as const, href: "/degrees/associate-of-arts" },
  { title: "Bachelor of Arts", level: "bachelor" as const, href: "/degrees/bachelor-of-arts" },
  { title: "Master of Arts", level: "master" as const, href: "/degrees/master-of-arts" },
  { title: "Doctorate", level: "doctorate" as const, href: "/degrees/doctorate" },
];

interface Props {
  isDark: boolean;
  onHero: boolean;
}

const HeaderNavigation: React.FC<Props> = ({ isDark, onHero }) => {
  const location = useLocation();
  const isDegreesPage = location.pathname.startsWith('/degrees');
  const navItems = isDegreesPage ? DEGREES_NAV_ITEMS : DEFAULT_NAV_ITEMS;

  return (
    <NavigationMenu className="hidden md:flex flex-1 items-center justify-center relative z-20" style={{ height: 40 }}>
      <NavigationMenuList className="flex items-center gap-2">
        {navItems.map((item) => {
          const active = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
          
          let colorClass = '';
          if (onHero) {
            if (isDark) {
              // Dark mode on hero
              colorClass = cn('text-white hover:text-ncu-blue', active && 'text-ncu-gold');
            } else {
              // Light mode on hero
              colorClass = cn('text-black hover:text-ncu-gold', active && 'text-ncu-blue');
            }
          } else {
            // Scrolled state (not on hero)
            colorClass = cn(
              'text-gray-700 dark:text-gray-200',
              'hover:text-ncu-blue dark:hover:text-ncu-gold',
              active && 'text-ncu-blue dark:text-ncu-gold'
            );
          }

          if (item.label === "Downloads" && location.pathname.startsWith('/downloads')) {
            return <DownloadsDropdown key={item.label} colorClass={colorClass} />;
          }

          if (item.label === "Degrees" && location.pathname.startsWith('/degrees')) {
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

const DownloadsDropdown: React.FC<{ colorClass: string }> = ({ colorClass }) => {
  const navigate = useNavigate();
  const [downloadItems, setDownloadItems] = useState<GoogleDrivePdf[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDownloads = async () => {
      setLoading(true);
      try {
        const pdfs = await googleDriveService.fetchPdfs();
        setDownloadItems(pdfs);
      } catch (error) {
        console.error("Failed to load download links:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDownloads();
  }, []);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        onClick={() => navigate('/downloads')}
        className={cn("bg-transparent", colorClass)}
      >
        Downloads
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-auto gap-1 p-4 md:w-[250px]">
          {loading ? (
            <li className="p-2 text-sm text-muted-foreground">Loading...</li>
          ) : downloadItems.length > 0 ? (
            downloadItems.map((item) => (
              <li key={item.id}>
                <NavigationMenuLink asChild>
                  <Link
                    to={`/downloads/${item.slug}`}
                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))
          ) : (
            <li className="p-2 text-sm text-muted-foreground">No downloads available.</li>
          )}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const DegreesDropdown: React.FC<{ colorClass: string }> = ({ colorClass }) => {
  const [courses, setCourses] = useState<Record<string, GoogleDrivePdf[]>>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchAllCourses = async () => {
      const allCourses: Record<string, GoogleDrivePdf[]> = {};
      for (const level of DEGREE_LEVELS) {
        try {
          const pdfs = await googleDriveService.fetchPdfsForDegree(level.level);
          allCourses[level.level] = pdfs;
        } catch (error) {
          console.error(`Failed to load courses for ${level.level}:`, error);
          allCourses[level.level] = [];
        }
      }
      setCourses(allCourses);
      setLoading(false);
    };
    fetchAllCourses();
  }, []);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        onClick={() => navigate('/degrees')}
        className={cn("bg-transparent", colorClass)}
      >
        Degrees
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        {loading ? (
          <div className="p-4 text-muted-foreground text-sm w-[200px]">Loading...</div>
        ) : (
          <ul className="grid w-auto gap-3 p-4 md:w-[500px] md:grid-cols-2">
            {DEGREE_LEVELS.map((level) => (
              <li key={level.title}>
                <NavigationMenuLink asChild>
                  <Link
                    to={level.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">{level.title}</div>
                  </Link>
                </NavigationMenuLink>
                <ul className="ml-4 mt-2 space-y-1">
                  {courses[level.level] && courses[level.level].length > 0 ? (
                    courses[level.level].map(course => (
                      <li key={course.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/degrees/${level.href.split('/').pop()}/${course.slug}`}
                            className="block text-sm text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent"
                          >
                            {course.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))
                  ) : (
                    !loading && <li className="text-xs text-muted-foreground p-2">No courses found.</li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default HeaderNavigation;