'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { scheduleData } from '@/lib/constants/schedule';

export default function ScheduleSection() {
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
            Planning des Streams
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {scheduleData.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/50 border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 p-4">
                  <div className="flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5 text-violet-400 mr-2" />
                    <h3 className="text-lg font-semibold">{day.day}</h3>
                  </div>
                  <p className="text-gray-400">{day.time}</p>
                  <p className="text-sm text-violet-400 mt-2">{day.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}