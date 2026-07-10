import {
  Sun,
  Award,
  Clock,
  MapPin,
  Home,
  Building2,
  Factory,
  Wrench,
  Zap,
  FileText,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  sun: Sun,
  award: Award,
  clock: Clock,
  map: MapPin,
  home: Home,
  building: Building2,
  factory: Factory,
  wrench: Wrench,
  zap: Zap,
  file: FileText,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sun;
}
