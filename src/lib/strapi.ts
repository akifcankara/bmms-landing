const BASE_URL = process.env.STRAPI_URL;

async function strapiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Strapi request failed: ${path} (${res.status})`);
  }

  return res.json();
}

const strapiClient = {
  get: <T>(path: string) => strapiGet<T>(path),
};

export default strapiClient;
