import { Twitch, Twitter, Discord, Youtube ,Instagram} from 'lucide-react';
import type { SocialLink } from '@/types/social';

export const socialLinks: SocialLink[] = [
  {
    name: 'Twitch',
    icon: Twitch,
    url: 'https://twitch.tv/driinja',
    color: 'hover:bg-purple-600'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/driinja',
    color: 'hover:bg-blue-500'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://discord.gg/driinja',
    color: 'hover:bg-indigo-600'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@driinja',
    color: 'hover:bg-red-600'
  }
];