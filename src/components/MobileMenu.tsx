import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Store", to: "/store" },
  { label: "Media", to: "/media" },
  { 
    label: "Downloads", 
    to: "/downloads",
    subItems: [
      { label: "Student Handbook", to: "/downloads/student-handbook" },
      { label: "Tuition & Fees", to: "/downloads/tuition-fees" },
      { label: "Graduate Studies Notebook", to: "/downloads/graduate-studies" },
      { label: "Course Catalogue", to: "/downloads/course-catalogue" },
    ]
  },
  { label: "Donate", to: "/donate" },
  { label: "Apply Now!", to: "/apply" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col animate-fade-in md:hidden">
      <div className="flex items-center justify-end p-4 border-b">
        <button onClick={onClose} aria-label="Close menu">
          <X className="h-8 w-8 text-foreground" />
        </button>
      </div>
      <nav className="flex-1 flex flex-col items-center justify-center p-4">
        <ul className="flex flex-col items-center gap-6 text-center w-full">
          {NAV_ITEMS.map((item) => {
            if (item.subItems) {
              return (
                <li key={item.label} className="w-full max-w-xs">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="text-2xl font-semibold text-foreground hover:no-underline justify-center">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col items-center gap-4 mt-4">
                          {item.subItems.map(subItem => {
                            const subActive = location.pathname === subItem.to;
                            return (
                              <li key={subItem.label}>
                                <Link
                                  to={subItem.to}
                                  onClick={onClose}
                                  className={cn(
                                    "text-lg font-medium transition-colors",
                                    subActive ? "text-ncu-gold" : "text-muted-foreground hover:text-ncu-gold"
                                  )}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              )
            }
            const active = location.pathname === item.to;
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className={cn(
                    "text-2xl font-semibold transition-colors",
                    active ? "text-ncu-gold" : "text-foreground hover:text-ncu-gold"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;