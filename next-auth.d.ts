import { UserRole } from "@prisma/client";
import NextAuth , {type DefaultSession} from "next-auth"


export type ExtendedUser = DefaultSession["user"] & {
    role:UserRole
}

declare module "next-auth"{
    interface Session{
        user:ExtendedUser
    }
}

import {JWT} from "next-auth/jwt";


declare module "next-auth/jwt"{
    interface JWT{
        role:UserRole;
    }
}



// Ye file:
// by default nextAuth me role nhi hota
// TypeScript ko batata hai ki NextAuth ke session aur JWT me custom field role exist karega.