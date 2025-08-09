import React, { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const LIGHT_ICON = "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png";
const DARK_ICON = "/lovable-uploads/0b8ffb5b-2139-4853-890a-c2ee2ca521ac.png";

const DynamicFavicon = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    const link = document.getElementById('favicon') as HTMLLinkElement | null;
    if (link) {
      link.href = isDark ? DARK_ICON : LIGHT_ICON;
    }
  }, [isDark]);

  return null; // This component doesn't render anything
};

export default DynamicFavicon;