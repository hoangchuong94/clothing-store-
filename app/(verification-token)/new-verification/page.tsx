import { Suspense } from 'react';
import NewVerification from '@/components/new-verification';

export default function NewVerificationPage() {
    return (
        <Suspense fallback={<div className="h-full w-full">loading...</div>}>
            <NewVerification />
        </Suspense>
    );
}
