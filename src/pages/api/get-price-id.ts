import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ error: 'Missing productId' });
    }
    const prices = await stripe.prices.list({ product: productId, active: true, limit: 10 });
    const recurringPrice = prices.data.find((p) => p.recurring);
    if (!recurringPrice) {
      return res.status(404).json({ error: 'No recurring price found for this product' });
    }
    return res.status(200).json({ priceId: recurringPrice.id });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
} 