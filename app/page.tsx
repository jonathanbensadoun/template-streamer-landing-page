'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import StreamHighlights from '@/components/sections/StreamHighlights';
import ScheduleSection from '@/components/sections/ScheduleSection';
import LatestVideosSection from '@/components/sections/LatestVideosSection';
import SocialLinks from '@/components/sections/SocialLinks';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black -z-10" />
      
      <HeroSection isLive={isLive} />
      <AboutSection />
      <StreamHighlights />
      <ScheduleSection />
      <LatestVideosSection />
      <SocialLinks />
      <NewsletterSection />

      {isLive && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-4 right-4 z-50"
        >
          <Button
            variant="outline"
            className="bg-red-500 hover:bg-red-600 text-white border-none"
            onClick={() => window.open('https://twitch.tv/driinja', '_blank')}
          >
            <Twitch className="mr-2 h-4 w-4" />
            Live Now!
          </Button>
        </motion.div>
      )}
    </main>
  );
}