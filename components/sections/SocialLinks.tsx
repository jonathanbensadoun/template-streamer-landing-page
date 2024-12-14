'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/lib/constants/social-links';
import { SocialButton } from '@/components/ui/social-button';

export default function SocialLinks() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            Rejoignez la Communauté
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((social) => (
              <SocialButton key={social.name} {...social} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}