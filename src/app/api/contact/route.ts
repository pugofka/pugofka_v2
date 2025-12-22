import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
        const body = await request.json();

        // Log the received data for debugging
        const { fileContent, ...loggableBody } = body;
        console.log('API Route Received:', loggableBody);

        if (fileContent) {
            console.log(`File attached. Size: ${Math.round(fileContent.length / 1024)}KB`);
        }

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
