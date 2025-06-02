import { NextResponse } from "next/server"
import Stripe from "stripe"
import { db } from "@/lib/db"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const signature = req.headers.get("stripe-signature") as string
    
    let event: Stripe.Event
    
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        webhookSecret
      )
    } catch (error: any) {
      return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
    }
    
    const session = event.data.object as Stripe.Checkout.Session
    
    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      // Retrieve the subscription details
      if (!session.metadata?.userId || !session.metadata?.courseId) {
        return new NextResponse("User ID or Course ID not found in metadata", { status: 400 })
      }
      
      const userId = session.metadata.userId
      const courseId = session.metadata.courseId
      
      // Save the purchase to your database
      await db.purchase.create({
        data: {
          userId,
          courseId,
          amount: session.amount_total ? session.amount_total / 100 : 0,
          status: "completed",
        },
      })
    }
    
    return new NextResponse(null, { status: 200 })
  } catch (error) {
    console.error('Error in Stripe webhook:', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}