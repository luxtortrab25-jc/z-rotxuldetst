
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { registerUser } from '@/lib/actions';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
});

interface RegistrationPopupProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function RegistrationPopup({ isOpen, onOpenChange }: RegistrationPopupProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await registerUser(values);
    
    if (result.success) {
      toast({
        title: '¡Registro Exitoso!',
        description: 'Gracias por registrarte. Pronto recibirás más información.',
      });
      form.reset();
      onOpenChange(false); // Close popup on success
    } else {
      toast({
        variant: 'destructive',
        title: 'Error en el Registro',
        description: result.error || 'Hubo un problema con tu registro. Por favor, intenta de nuevo.',
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] bg-card border-border p-0 overflow-hidden">
        <div className="relative h-48 w-full bg-black flex items-center justify-center">
            <Image 
                src="https://i.postimg.cc/8PvwmpD1/luxtorr.png"
                alt="Luxtor Detail Studio Logo"
                width={200}
                height={200}
                className="h-auto w-auto max-w-[50vw] md:max-w-[200px]"
                data-ai-hint="logo"
            />
        </div>
        <div className="p-6">
            <DialogHeader className="text-center mb-6">
                <DialogTitle className="font-headline text-3xl text-white">Recibe Promociones</DialogTitle>
                <DialogDescription className="text-muted-foreground pt-2">
                Regístrate y sé el primero en conocer nuestras ofertas exclusivas y novedades.
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-white font-body">Nombre</FormLabel>
                    <FormControl>
                        <Input placeholder="Tu nombre" {...field} className="bg-background text-white" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-white font-body">Correo Electrónico</FormLabel>
                    <FormControl>
                        <Input placeholder="tu.correo@ejemplo.com" {...field} className="bg-background text-white" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full font-headline uppercase text-lg mt-4 animate-enticing-pulse" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Registrando...' : '¡Quiero mi Descuento!'}
                </Button>
            </form>
            </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
