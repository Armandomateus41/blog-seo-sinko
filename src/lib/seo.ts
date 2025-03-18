export function generateSEO({
    title,
    description,
    url,
    image = "/default-og-image.jpg",
  }: {
    title: string;
    description: string;
    url: string;
    image?: string;
  }) {
    return {
      title,
      description,
      openGraph: {
        type: "article",
        url,
        title,
        description,
        images: [{ url: image }],
      },
      twitter: {
        card: "summary_large_image",
        site: "@seuTwitter",
        title,
        description,
        image,
      },
    };
  }
  