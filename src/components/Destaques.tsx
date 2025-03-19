import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Destaques() {
  // Obtém os posts do banco ou CMS
  const posts = await getAllPosts();

  // Duplicamos os destaques para exibição
  const destaques = [
    ...posts.slice(0, 4),
    ...posts.slice(0, 4),
    ...posts.slice(0, 4),
    ...posts.slice(0, 4),
  ];

  return (
   
    <div className="container mx-auto px-6">
  
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-gray-100 dark:bg-gray-800 py-0">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destaques.map((post, index) => (
            <div key={index} className="flex items-center gap-4">
             
              <div className="relative w-28 h-28 flex-shrink-0">
                <Image
                  src={`/images/${post.image}`}
                  alt={post.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
             
              <div>
                <span className="text-sm text-orange-500 font-semibold flex items-center gap-1">
                  Em alta
                </span>
                <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {post.description}
                </p>
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
