import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next App Template",
    short_name: "Template",
    start_url: "/",
    display: "standalone",
  };
}
