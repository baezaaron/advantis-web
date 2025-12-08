import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { priceId, customerEmail } = await req.json();
    if (!priceId || !customerEmail) {
      return NextResponse.json({ error: 'Missing priceId or customerEmail' }, { status: 400 });
    }
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'advantis.care';
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
      shipping_address_collection: { allowed_countries: ['US'] },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/services`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Checkout Error:', err, err?.raw || '');
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 