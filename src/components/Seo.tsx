import { useEffect } from 'react';
import { business } from '@/data/business';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  canonical?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: object;
};

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setProp(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function normalizePath(rawPath: string): string {
  if (!rawPath || rawPath === '/') return '/';
  const withLeadingSlash = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  return withLeadingSlash.replace(/\/+$/, '');
}

export default function Seo({
  title,
  description,
  path,
  canonical,
  ogType = 'website',
  noindex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const cleanPath = normalizePath(path);
    const url = canonical || `${business.website}${cleanPath}`;
    document.title = title;
    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, follow' : 'index, follow');

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (noindex) {
      if (link) link.remove();
    } else {
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

    setProp('og:title', title);
    setProp('og:description', description);
    setProp('og:url', url);
    setProp('og:type', ogType);
    setProp('og:site_name', business.name);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let script = document.getElementById('page-jsonld') as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script');
        script.id = 'page-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, canonical, ogType, noindex, jsonLd]);

  return null;
}
