'use client';

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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactMessage } from '@/lib/actions';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Por favor, introduce un correo electrónico válido.',
  }),
  message: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres.',
  }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await sendContactMessage(values);
    
    if (result.success) {
      toast({
        title: 'Mensaje Enviado',
        description: 'Gracias por contactarnos. Te responderemos pronto.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: result.error || 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
      });
    }
    setIsSubmitting(false);
  }

  return (
    <section id="contacto" className="py-20 sm:py-32 bg-black">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-5xl font-bold uppercase text-primary md:text-6xl">
            Contacto
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-xl">
            ¿Listo para darle a tu coche el tratamiento que se merece? Contáctanos.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-body text-lg">Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} className="bg-background text-white text-lg h-12" />
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
                    <FormLabel className="text-white font-body text-lg">Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="tu.correo@ejemplo.com" {...field} className="bg-background text-white text-lg h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-body text-lg">Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos sobre tu vehículo y qué servicio te interesa..."
                        {...field}
                        className="bg-background text-white min-h-[180px] text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full font-headline uppercase text-xl py-8" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
