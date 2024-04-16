
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Mehak <mehakdeepk65@gmail.com>',
      to: ['kmehakdeep365@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'Dude' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
