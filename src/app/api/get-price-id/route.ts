import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    if (!productId) {
      return NextResponse.json({ error: 'Missing productId' }, { status: 400 });
    }
    // List prices for the product
    const prices = await stripe.prices.list({ product: productId, active: true, limit: 10 });
    // Find the first recurring price (for subscriptions)
    const recurringPrice = prices.data.find((p) => p.recurring);
    if (!recurringPrice) {
      return NextResponse.json({ error: 'No recurring price found for this product' }, { status: 404 });
    }
    return NextResponse.json({ priceId: recurringPrice.id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 