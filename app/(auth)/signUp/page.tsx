import { Suspense } from 'react';
import SignUpForm from '@/components/signUp-form';

export default function SignUpPage() {
    return (
        <Suspense fallback={<div className="h-full w-full">loading...</div>}>
            <SignUpForm />
        </Suspense>
    );
}
