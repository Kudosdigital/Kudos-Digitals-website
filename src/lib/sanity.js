// /src/lib/sanity.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "i3gm55cv", 
  dataset: "blog_posts",
  apiVersion: "2023-01-01",
  useCdn: true,
});
