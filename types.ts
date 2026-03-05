import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface IndustryItem {
  name: string;
  image: string;
}

export interface ClientItem {
  name: string;
  category: string;
}