import { Key } from "react";

export const CONFIG_API_PATH = {
  CONFIGS_PATH: "v1/public/website-configs",
  CONFIG_PATH: (code: string) => `v1/public/website-configs/${code}`,
};

export const ESTATE_API_PATH = {
  ESTATES_PATH: "v1/public/estates",
  ESTATE_PATH: (id: Key) => `v1/public/estates/${id}`,
  RANDOM_ESTATES_PATH: "v1/public/estates/random",
};

export const CATEGORY_API_PATH = {
  CATEGORIES_PATH: "v1/public/categories",
};
