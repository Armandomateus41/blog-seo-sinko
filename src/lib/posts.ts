"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

// ✅ Adicionamos `cache()` para armazenar os posts e evitar leituras repetitivas
export const getAllPosts = cache(async () => {
  try {
    const files = await fs.readdir(postsDirectory);

    const posts = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
          ...data,
          slug: filename.replace(".md", ""),
        };
      })
    );

    return posts;
  } catch (error) {
    console.error("Erro ao buscar os posts:", error);
    return [];
  }
});

// ✅ Cache também para a função que busca posts individuais
export const getPostBySlug = cache(async (slug: string) => {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      ...data,
      content,
    };
  } catch (error) {
    console.error(`Erro ao buscar o post "${slug}":`, error);
    return null;
  }
});
