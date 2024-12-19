// next-auth.d.ts
import { DefaultSession } from 'next-auth';
// import { JWT as DefaultJWT } from 'next-auth/jwt';
import { UserRole } from '@prisma/client';

// Mở rộng interface Session
declare module 'next-auth' {
    interface Session {
        user: {
            image: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string | null;
            email: string | null;
            emailVerified: Date | null;
            password: string | null;
            role: UserRole;
        } & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        role: UserRole;
    }
}
