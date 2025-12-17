import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
        const body = await request.json();

        // Log the received data for debugging purposes
        console.log('Form submission received:', body);

        // Return a success response
        return NextResponse.json(
            { message: 'Form submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing form submission:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
