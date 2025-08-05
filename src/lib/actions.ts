
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// Initialize Resend with the provided API key.
const resend = new Resend('re_E1Lockgb_98LSf79GVxQPde7p2GaSwT1Z');

// Use a fixed business email address.
const businessEmail = 'luxtortrab25@gmail.com';

const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un correo electrónico válido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

const registrationFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un correo electrónico válido.'),
});

export async function sendContactMessage(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(', ');
    return { success: false, error: errorMessages };
  }

  const { name, email, message } = parsed.data;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: businessEmail,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error: 'Hubo un problema al enviar tu mensaje.' };
  }
}

export async function registerUser(formData: { name: string; email: string }) {
  const parsed = registrationFormSchema.safeParse(formData);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(', ');
    return { success: false, error: errorMessages };
  }

  const { name, email } = parsed.data;

  try {
    // Send notification to business owner
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: businessEmail,
      subject: 'Nuevo Suscriptor',
      html: `
        <p>Un nuevo usuario se ha suscrito:</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
      `,
    });

    // Send confirmation to the user
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: '¡Gracias por registrarte en Luxtor Detail Studios!',
        html: `
            <h1>¡Bienvenido, ${name}!</h1>
            <p>Gracias por registrarte para recibir nuestras promociones y novedades. Pronto te enviaremos ofertas exclusivas.</p>
            <p>El equipo de Luxtor Detail Studios.</p>
        `
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending registration email:', error);
    return { success: false, error: 'Hubo un problema con tu registro.' };
  }
}
