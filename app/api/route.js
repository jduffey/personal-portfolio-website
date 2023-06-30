import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json(
        {
            greeting: "Hello!",
            message: "This is a demo of the Next.js API route.",
            favorites: {
                food: "Pizza",
                number: "1559",
                color: "Space Black",
                baseballTeam: "Reds",
            }
        }
    )
}