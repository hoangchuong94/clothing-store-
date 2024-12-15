import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET() {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json(
            {
                status: 'fail',
                message: 'You are not logged in',
            },
            { status: 401 },
        );
    }
    return NextResponse.json({
        authenticated: !!session,
        session,
    });
}
