import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);