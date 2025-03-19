"use client"; 


import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-6">
      
      <div className="bg-white rounded-lg  p-2">
        <h3 className="text-base font-semibold mb-4">Mais lidas</h3>
        <ul className="space-y-3 text-sm">
 
          <li className="flex gap-2">
           
            <div className="relative w-16 h-15 rounded-[10px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/1.png" 
                alt="Post 1"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Link href="#">
                <span className="text-blue-500 hover:underline font-medium leading-snug line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </span>
              </Link>
              <p className="text-xs text-gray-500 mt-1">01/11/2024</p>
            </div>
          </li>

          {/* Item 2 */}
          <li className="flex gap-2">
            <div className="relative w-16 h-16 rounded-[10px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/8.png"
                alt="Post 2"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Link href="#">
                <span className="text-blue-500 hover:underline font-medium leading-snug line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </span>
              </Link>
              <p className="text-xs text-gray-500 mt-1">01/11/2024</p>
            </div>
          </li>

          {/* Item 3 */}
          <li className="flex gap-2">
            <div className="relative w-16 h-1 rounded-[10px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/9.png"
                alt="Post 3"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Link href="#">
                <span className="text-blue-500 hover:underline font-medium leading-snug line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </span>
              </Link>
              <p className="text-xs text-gray-500 mt-1">01/11/2024</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Assuntos mais acessados */}
      <div className="bg-white rounded-lg  p-4">
        <h3 className="text-base font-semibold mb-4">Assuntos mais acessados</h3>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link href="#">
              <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-full text-xs font-semibold hover:underline">
                Notícias
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-full text-xs font-semibold hover:underline">
                Empréstimo Consignado
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-full text-xs font-semibold hover:underline">
                Organização Financeira
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-full text-xs font-semibold hover:underline">
                Benefícios
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Gostou do conteúdo? Compartilhe! */}
      <div className="bg-white rounded-lg  p-4 text-sm text-gray-00">
        <p className="mb-3 font-medium">Gostou do conteúdo? Compartilhe!</p>
    
        <div className="flex gap-3">
        
          <Link href="#" aria-label="YouTube">
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={24}
              height={24}
              className="hover:opacity-80 transition"
            />
          </Link>
         
          <Link href="#" aria-label="Facebook">
            <Image
              src="/images/Insta.png"
              alt="Facebook"
              width={24}
              height={24}
              className="hover:opacity-80 transition"
            />
          </Link>
    
          <Link href="#" aria-label="Twitter">
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={24}
              height={24}
              className="hover:opacity-80 transition"
            />
          </Link>
          {/* Instagram */}
          <Link href="#" aria-label="Instagram">
            <Image
              src="/images/IonLogoInstagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-80 transition"
            />
          </Link>
          {/* LinkedIn */}
          <Link href="#" aria-label="LinkedIn">
            <Image
              src="/images/linkend.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:opacity-80 transition"
            />
          </Link>
          {/* WhatsApp */}
          <Link href="#" aria-label="WhatsApp">
            <Image
              src="/images/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
}
