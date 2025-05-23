import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Set your one-time shipping fee in cents (e.g., 1999 = $19.99)
const SHIPPING_AMOUNT = 1999;
const SHIPPING_CURRENCY = 'usd';

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
    }
    // Retrieve the subscription session to get email and shipping address
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    // @ts-ignore: Stripe types may not include shipping_details
    const shippingDetails = session.shipping_details;
    if (!session.customer_email || !shippingDetails?.address) {
      return NextResponse.json({ error: 'Missing email or shipping address from subscription session' }, { status: 400 });
    }
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    // Create a one-time payment session for shipping
    const shippingSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: session.customer_email,
      shipping_address_collection: { allowed_countries: ['US'] },
      line_items: [
        {
          price_data: {
            currency: SHIPPING_CURRENCY,
            product_data: {
              name: 'One-Time Shipping Fee',
            },
            unit_amount: SHIPPING_AMOUNT,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?shipping_paid=true`,
      cancel_url: `${origin}/success`,
    });
    return NextResponse.json({ url: shippingSession.url });
  } catch (err: any) {
    console.error('Stripe Shipping Session Error:', err, err?.raw || '');
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 