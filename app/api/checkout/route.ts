import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function POST(req: Request) {
  try {
    const session = await getServerSession(options)
    
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    
    const { courseId, price, name } = await req.json()
    
    const lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name,
          },
          unit_amount: Math.round(price * 100),
        },
        quantity: 1,
      },
    ]
    
    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/courses/${courseId}?canceled=true`,
      metadata: {
        userId: session.user.id,
        courseId,
      },
    })
    
    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error('Error in checkout API:', error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}