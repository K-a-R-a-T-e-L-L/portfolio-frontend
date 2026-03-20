import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next App Template",
    short_name: "Template",
    description: "Starter template with Mantine, i18n and typed API layer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1020",
    theme_color: "#5b4bff",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
