import { useEffect } from 'react';
import { business } from '@/data/business';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  canonical?: string;
  ogType?: string;
  jsonLd?: object;
};

function setTag(selector: string, attr: string, value: string, base?: HTMLElement) {
  let el = (base || document).querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement(attr === 'property' ? 'meta' : 'meta');
    if (attr === 'property') el.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
    (base || document.head).appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function setProp(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo({ title, description, path, canonical, ogType = 'website', jsonLd }: SeoProps) {
  useEffect(() => {
    const url = canonical || `${business.website}${path}`;
    document.title = title;
    setMeta('description', description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

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
  }, [title, description, path, canonical, ogType, jsonLd]);

  return null;
}
