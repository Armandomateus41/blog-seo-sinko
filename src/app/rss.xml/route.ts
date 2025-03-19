import { getAllPosts } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "http://localhost:3000"; 
  const posts = await getAllPosts();

  const rssItems = posts
    .map((post) => {
      return `
        <item>
          <title>${post.title}</title>
          <link>${baseUrl}/posts/${post.slug}</link>
          <description>${post.description}</description>
          <pubDate>${new Date().toUTCString()}</pubDate>
        </item>
      `;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Blog SEO - Next.js</title>
      <link>${baseUrl}</link>
      <description>Assine nosso RSS para receber novos posts!</description>
      ${rssItems}
    </channel>
  </rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
