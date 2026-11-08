import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

type Crumb = { name: string; path?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  useEffect(() => {}, []);
  const all = [{ name: 'Home', path: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="container-page pt-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-charcoal-500">
        {all.map((item, i) => {
          const last = i === all.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
              {item.path && !last ? (
                <Link to={item.path} className="hover:text-forest-700 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className={last ? 'font-medium text-charcoal-700' : ''} aria-current={last ? 'page' : undefined}>
                  {item.name}
                </span>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
