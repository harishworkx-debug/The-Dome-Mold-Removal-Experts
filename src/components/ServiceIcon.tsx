import {
  Search,
  ClipboardList,
  FlaskConical,
  Sparkles,
  ShieldCheck,
  Droplets,
  HousePlus,
  ArrowDownToLine,
  Home,
  Wind,
  Building2,
} from 'lucide-react';

const iconMap: Record<string, typeof Search> = {
  Search,
  ClipboardList,
  FlaskConical,
  Sparkles,
  ShieldCheck,
  Droplets,
  HousePlus,
  ArrowDownToLine,
  Home,
  Wind,
  Building2,
};

export function ServiceIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Search;
  return <Icon className={className} aria-hidden="true" />;
}

