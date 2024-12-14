'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { SocialLink } from '@/types/social';

export  function SocialButton({ name, icon:Icon, url, color }: SocialLink) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Button
        variant="outline"
        size="lg"
        className={`bg-black/50 border-violet-500/20 hover:border-violet-500/50 ${color} transition-all duration-300`}
        onClick={() => window.open(url, '_blank')}
      >
        <Icon className="mr-2 h-5 w-5" />
        {name}
      </Button>
    </motion.div>
  );
}