import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6tOGRwNiGo6bgM06AlV5LE1LU-daZpaIZm90DqdGc8npD56COARTuw_iMfi5wCgR6GA/exec";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Follow redirects is important for Google Scripts
            redirect: "follow",
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Google Script returned ${response.status}`);
        }

        // Google Scripts usually returns a 302 -> 200 with text/html or json
        // We just need to know if it finished without error.

        return NextResponse.json({ success: true, message: "Booking submitted successfully" });

    } catch (error) {
        console.error("Booking API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to submit booking" },
            { status: 500 }
        );
    }
}
