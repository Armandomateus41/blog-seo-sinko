import { getAllPosts } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "http://localhost:3000"; 

  const staticPages = [
    `${baseUrl}/`,
    `${baseUrl}/categorias/seo`,
    `${baseUrl}/categorias/frontend`,
    `${baseUrl}/categorias/nextjs`,
  ];

  const posts = getAllPosts().map(
    (post) => `${baseUrl}/posts/${post.slug}`
  );

  const allUrls = [...staticPages, ...posts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
