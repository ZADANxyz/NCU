import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";

const Profile = () => {
  const { user, profile, isAuthenticated } = useCart();
  const navigate = useNavigate();
  usePageTitle(profile ? `${profile.first_name}'s Profile` : 'Profile');

  React.useEffect(() => {
    // A short delay to allow auth state to settle before redirecting
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        navigate('/');
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  if (!user || !profile) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  const username = user.email?.split('@')[0] || 'user';

  return (
    <>
      <div className="pt-20">
        <section className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 bg-white/40 dark:bg-black/30 rounded-2xl border border-gold/40 shadow-lg">
              <div className="absolute top-4 right-4">
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Avatar className="w-32 h-32 border-4 border-gold/80 shadow-lg">
                  <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${profile.first_name} ${profile.last_name}`} />
                  <AvatarFallback>{profile.first_name?.[0]}{profile.last_name?.[0]}</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">{profile.first_name} {profile.last_name}</h1>
                  <p className="text-md text-gray-500 dark:text-gray-400 mt-1">@{username}</p>
                  <p className="text-md text-gray-600 dark:text-gray-300 mt-2">{user.email}</p>
                </div>
              </div>
              <div className="border-t border-gold/30 my-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">123 Main Street, Anytown, USA 12345</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Purchase History</h3>
                  <div className="text-gray-500 dark:text-gray-400">
                    No recent purchases.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        <MapSection />
      </div>
    </>
  );
};

export default Profile;