
'use client';

import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/message/7OL3CGYB4GMZE1',
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
    href: 'https://www.tiktok.com/@luxtor.detail.stu?_t=ZS-8y3NcC83Z6V&_r=1',
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
