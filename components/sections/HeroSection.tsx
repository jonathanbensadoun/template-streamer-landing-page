'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Twitch } from 'lucide-react';

export default function HeroSection({ isLive }: { isLive: boolean }) {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            DRIINJA
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Embarquez pour une aventure gaming unique où chaque stream est une nouvelle épopée
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white"
              onClick={() => window.open('https://twitch.tv/driinja', '_blank')}
            >
              <Twitch className="mr-2" />
              Suivre sur Twitch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              style={{
                top: `${20 * i}%`,
                left: '-100%',
                right: '-100%',
                animation: `slide ${3 + i}s linear infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}