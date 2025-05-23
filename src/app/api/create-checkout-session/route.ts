import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { priceId, customerEmail } = await req.json();
    if (!priceId || !customerEmail) {
      return NextResponse.json({ error: 'Missing priceId or customerEmail' }, { status: 400 });
    }
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      customer_email: customerEmail,
      shipping_options: [
        { shipping_rate: 'shr_1RRlipQ7gXLUzfU5x6ilQVoz' }
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/private-services`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 