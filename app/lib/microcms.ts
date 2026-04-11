import ky from "ky";

export function createClient(env: {
  MICROCMS_DOMAIN: string;
  MICROCMS_API_KEY: string;
}) {
  return ky.create({
    prefix: `https://${env.MICROCMS_DOMAIN}.microcms.io/api/v1`,
    headers: {
      "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY,
    },
    timeout: 10000,
  });
}
