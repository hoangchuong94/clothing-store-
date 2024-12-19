import { auth } from '@/auth';
import React from 'react';

export default async function Home() {
    const session = await auth();

    // Ensure session data is defined and valid
    if (!session) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="rounded-lg bg-gray-800 p-6 text-white animate-in">
                    <h1 className="text-3xl font-bold">Hello, Tailwind CSS Animate!</h1>
                    <p>No session data available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="rounded-lg bg-gray-800 p-6 text-white animate-in">
                <h1 className="text-3xl font-bold">Hello, Tailwind CSS Animate!</h1>
                <p>Đây là một ví dụ sử dụng hiệu ứng fade-in.</p>
                <pre>{JSON.stringify(session.user.role, null, 2)}</pre>
            </div>
        </div>
    );
}
