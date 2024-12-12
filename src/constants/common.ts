export const STOREFRONT_URL = "yody.vn";

export enum MaxSEOLength {
  Title = 70,
  Description = 300,
}

const CDN_URL = import.meta.env.VITE_CDN_URL;
const baseCDN = `${CDN_URL || "https://buggy-dev.yodycdn.com"}`;
export const URL_IMAGE = `${baseCDN}/images`;
