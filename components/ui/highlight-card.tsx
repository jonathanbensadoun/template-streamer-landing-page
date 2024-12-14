'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface HighlightCardProps {
  highlight: {
    title: string;
    image: string;
    description: string;
  };
  index: number;
  isInView: boolean;
}

export function HighlightCard({ highlight, index, isInView }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="bg-black/50 border-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img
            src={highlight.image}
            alt={highlight.title}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-violet-400">{highlight.title}</h3>
          <p className="text-gray-400">{highlight.description}</p>
        </div>
      </Card>
    </motion.div>
  );
}