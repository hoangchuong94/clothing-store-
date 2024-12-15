import { Suspense } from 'react';
import SignInForm from '@/components/signIn-form';

export default function SignInPage() {
    return (
        <Suspense fallback={<div className="h-full w-full">loading...</div>}>
            <SignInForm />
        </Suspense>
    );
}
