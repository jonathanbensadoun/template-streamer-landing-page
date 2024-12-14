'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsletterSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Mail className="w-12 h-12 mx-auto mb-6 text-violet-400" />
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            Restez Connecté
          </h2>
          <p className="text-gray-400 mb-8">
            Abonnez-vous à la newsletter pour ne manquer aucune actualité et recevoir des contenus exclusifs !
          </p>
          
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre email"
              className="bg-black/50 border-violet-500/20 focus:border-violet-500/50"
            />
            <Button className="bg-violet-600 hover:bg-violet-700">
              S'abonner
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}