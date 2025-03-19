import Link from "next/link";
import Image from "next/image";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-gray-800 py-10 mt-12">
      <div className="max-w-[1440px] mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">
       
          <div className="flex flex-col gap-2">
           
            <div className="w-[220px] h-[50px] relative">
              <Image
                src="/images/logotipo-blog.png" 
                alt="Logo SINKO"
                fill
                className="object-contain"
              />
            </div>
         
            <p className="text-lg text-gray-600 mt-2">
              © 2025 SINKO. Todos os direitos reservados.
            </p>
          </div>

     
          <div>
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
       
            <ul className="space-y-2 text-lg">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Notícias</Link>
              </li>
              <li>
                <Link href="">Nossos produtos</Link>
                
              </li>
            </ul>
          </div>

          {/* Coluna 3: SINKO */}
          <div>
            <h3 className="text-xl font-semibold mb-3">SINKO</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <Link href="#">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#">Termos de uso</Link>
              </li>
              <li>
                <Link href="#">Política de privacidade</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
              <li>
                <Link href="#">Nossa equipe</Link>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
       
          <div className="flex gap-4">
         
            <Link href="#" aria-label="YouTube">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/Youtube.png" 
                  alt="YouTube"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link href="#" aria-label="Twitter">
              <div className="w-10 h-8 relative">
                <Image
                  src="/images/twitter.png" 
                  alt="Twitter"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link href="#" aria-label="Instagram">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/Insta.png"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link href="#" aria-label="LinkedIn">
              <div className="w-10 h-8 relative">
                <Image
                  src="/images/linkend.png" 
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link href="#" aria-label="WhatsApp">
              <div className="w-10 h-8 relative">
                <Image
                  src="/images/Whatsapp.png" 
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

        
          <Link
            href="#top" 
            className="mt-4 md:mt-0 flex items-center gap-2 text-lg text-[#00bcd4] font-bold hover:underline"
            aria-label="Voltar ao topo"
          >
         
            <ArrowUp size={24} />
            <span>Voltar ao topo</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
