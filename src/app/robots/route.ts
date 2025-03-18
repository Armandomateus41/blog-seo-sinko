import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `
    User-agent: *
    Allow: /

    Sitemap: http://localhost:3000/sitemap.xml
  `;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
