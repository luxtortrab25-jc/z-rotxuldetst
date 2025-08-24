
'use client';

import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=5215549361690&text=Hola%20%F0%9F%91%8B%20%0ATengo%20un%20%5Bauto%5D%20y%20me%20interesa%20el%20servicio%20de%20%5Bnombre%20del%20servicio%5D.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F',
    icon: (
      <Image
        src="https://i.postimg.cc/pVCpD0Bd/whatsapp-icono-32.png"
        alt="WhatsApp"
        width={48}
        height={48}
        className="h-12 w-12"
      />
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61577925992808',
    icon: (
       <Image
        src="https://i.postimg.cc/QMFyqn5Z/fb-icono-32.png"
        alt="Facebook"
        width={48}
        height={48}
        className="h-12 w-12"
      />
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/luxtords?igsh=azU4M2dpN3J3eG1v',
    icon: (
      <Image
        src="https://i.postimg.cc/gJ9NHcm3/instagram-icono-32.png"
        alt="Instagram"
        width={48}
        height={48}
        className="h-12 w-12"
      />
    )
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@luxtordetailstudio?_t=ZS-8z7OJ7XFiGA&_r=1',
    icon: (
      <Image
        src="https://i.postimg.cc/NMYR0KQC/tiktok-icono-32.png"
        alt="TikTok"
        width={48}
        height={48}
        className="h-12 w-12"
      />
    )
  },
];

export default function SocialBar() {
  return (
    <div className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-6 md:right-8">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-white transition-transform duration-300 hover:scale-125 hover:text-primary"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
