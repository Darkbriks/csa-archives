const BASE = import.meta.env.BASE_URL;

export function url(path = '') {
  const b = BASE.endsWith('/') ? BASE : BASE + '/';
  return b + String(path).replace(/^\//, '');
}

export function ref(collection, slug) {
  return url(`${collection}/${slug}`);
}

export function asset(path) {
  if (!path) return null;
  if (/^https?:\/\//.test(path)) return path;
  return url(path);
}
