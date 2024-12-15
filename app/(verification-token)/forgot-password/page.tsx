import { Suspense } from 'react';
import ForgotPassword from '@/components/forgot-password';

export default function ForgotPasswordPage() {
    return (
        <Suspense fallback={<div className="h-full w-full">loading...</div>}>
            <ForgotPassword />
        </Suspense>
    );
}
