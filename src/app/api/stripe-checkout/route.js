import { NextResponse } from 'next/server'

export async function GET() {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
        success_url: 'https://candidate-00-x-crowbarltd-module-yu.vercel.app/success',
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: " Service Trial",
                    },
                    unit_amount: 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
    });
    return NextResponse.json({ message: session })
}