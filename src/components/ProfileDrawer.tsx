import React from "react";
import { X, Edit, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCart } from "@/contexts/CartContext";
import ProfileAuth from "./ProfileAuth";
import { Link } from "react-router-dom";

const ProfileDrawer: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const { user, profile, logout } = useCart();

  const glassBg = "rgba(255,255,255,0.87)";
  const glassBgDark = "rgba(13, 25, 49, 0.82)";

  const [isDark, setIsDark] = React.useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );
  
  React.useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => obs.disconnect();
  }, []);

  const username = user?.email?.split('@')[0] || 'user';

  return (
    <div
      className={`fixed inset-0 z-[100] flex justify-end transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close Profile"
      />
      <aside
        className={`relative h-full w-full max-w-[480px] sm:max-w-[70vw] flex flex-col animate-none
          ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
        style={{
          background: isDark ? glassBgDark : glassBg,
          backdropFilter: "blur(22px) saturate(165%)",
          WebkitBackdropFilter: "blur(22px) saturate(165%)",
          borderTopRightRadius: "0.45rem",
          borderBottomRightRadius: "0.45rem",
          borderTopLeftRadius: "0.38rem",
          borderBottomLeftRadius: "0.38rem",
          boxShadow:
            "0 4px 24px 6px rgba(0,0,0,0.14), 0 2px 8px rgba(177,149,40,0.06)",
          borderLeft: "1.5px solid #B19528",
          overflow: "hidden",
        }}
      >
        <div
          className="flex items-center justify-between p-6 pb-2 border-b border-gold/70 bg-white/30 dark:bg-black/20 backdrop-blur-sm relative" style={{ zIndex: 12 }}
        >
          <span className="text-lg font-semibold text-[#B19528] w-full"></span>
          {user && (
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          )}
          <button
            className="p-2 transition focus-visible:outline-none ml-auto"
            onClick={onClose}
            aria-label="Close Profile"
          >
            <X size={20} color={isDark ? "#B19528" : "#046BD2"} strokeWidth={2} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 relative" style={{ zIndex: 12 }}>
          {!user ? (
            <ProfileAuth />
          ) : (
            <div className="flex flex-col items-center space-y-6 text-center">
              <Avatar className="w-28 h-28 border-4 border-gold/80 shadow-lg">
                <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${profile?.first_name} ${profile?.last_name}`} />
                <AvatarFallback>{profile?.first_name?.[0]}{profile?.last_name?.[0]}</AvatarFallback>
              </Avatar>
              
              <div className="w-full">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{profile?.first_name} {profile?.last_name}</h2>
              </div>

              <div className="w-full p-4 bg-white/40 dark:bg-black/30 rounded-xl border border-gold/40 space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Email:</span>
                  <span className="text-sm text-gray-800 dark:text-gray-100">{user.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Username:</span>
                  <span className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{username}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Address:</span>
                  <span className="text-sm text-gray-800 dark:text-gray-100">123 Main Street, Anytown, USA 12345</span>
                </div>
              </div>

              <div className="w-full p-4 bg-white/40 dark:bg-black/30 rounded-xl border border-gold/40">
                <h3 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2 text-center">Purchase History</h3>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  No recent purchases.
                </div>
              </div>
            </div>
          )}
        </div>

        {user && (
          <div className="px-6 py-4 space-y-2 border-t border-gold/70" style={{ zIndex: 12 }}>
            <Button asChild className="w-full">
              <Link to={`/profile/${username}`} onClick={onClose}>View Full Profile</Link>
            </Button>
            <Button variant="outline" onClick={logout} className="w-full">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default ProfileDrawer;