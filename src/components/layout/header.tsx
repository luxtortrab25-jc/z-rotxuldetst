
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { 
    name: 'Servicios', 
    href: '/servicios',
    dropdown: [
      { name: 'PPF', href: '/servicios/ppf' },
      { name: 'Wrap', href: '/servicios/wrap' },
      { name: 'Tratamiento Cerámico', href: '/servicios/tratamiento-ceramico' },
      { name: 'Película de Seguridad', href: '/servicios/pelicula-de-seguridad' },
    ]
  },
  { name: 'Galería', href: '/galeria' },
  { name: 'Testimonios', href: '/testimonios' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
];

const NavLink = ({ name, href }: { name: string, href: string }) => (
  <Link
    href={href}
    className="group relative text-white transition-colors hover:text-primary text-lg"
  >
    {name}
    <span className="absolute bottom-[-4px] left-0 block h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-gradient-to-r from-[#25313F] to-[#0E1520]">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://i.postimg.cc/fySW-nv1G/luxxtorr.jpg"
            alt="Luxtor Detail Studio"
            width={120}
            height={34}
            data-ai-hint="logo"
            className="h-auto w-auto transition-transform hover:scale-105 mix-blend-lighten"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                   <Link href={link.href} className="flex items-center">
                     <Button
                      variant="ghost"
                      className="group flex items-center gap-1 p-0 text-white transition-colors hover:bg-transparent hover:text-primary focus-visible:ring-0 text-lg"
                    >
                      {link.name}
                      <ChevronDown className="relative top-[1px] h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Button>
                   </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border text-lg">
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="text-base">
                      <Link href={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink key={link.name} name={link.name} href={link.href} />
            )
          )}
           <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg">
            <Link href="https://api.whatsapp.com/send?phone=5215549361690&text=Hola%20%F0%9F%91%8B%20%0ATengo%20un%20%5Bauto%5D%20y%20me%20interesa%20el%20servicio%20de%20%5Bnombre%20del%20servicio%5D.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer">Contactar</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="sr-only">Navegación Móvil</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-lg",
                      (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))) ? 'text-primary font-bold' : 'text-foreground'
                    )}
                    onClick={() => setSheetOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                 <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                  <Link href="https://api.whatsapp.com/send?phone=5215549361690&text=Hola%20%F0%9F%91%8B%20%0ATengo%20un%20%5Bauto%5D%20y%20me%20interesa%20el%20servicio%20de%20%5Bnombre%20del%20servicio%5D.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer">Contactar</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
<p class="mt-2 text-center text-sm text-muted-foreground">Este sitio web pertenece a Raquel Juárez Ugalde</p>
      </div>
    </header>
  );
}
