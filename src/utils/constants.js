export const LOGO =
  "https://www.shutterstock.com/image-vector/flat-vector-cute-cartoon-panda-600nw-2343798945.jpg";

export const IMG =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTgzNWQ2MzNlNDIzYTc5MzFmMDE1MGQ4ZWMxNDU5YiIsIm5iZiI6MTcyMzczMDg2NS43NzU0MTUsInN1YiI6IjY2YmUwYTJjNjE4N2IxNGI2M2MzODZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pKDw77PKrRXNxBIh_8GbZsDyqU6avCyZiNnwXGOcT2k",
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "tamil", name: "Tamil" },
];
export const OPENAI_KEY = process.env.OPENAI_KEY;
