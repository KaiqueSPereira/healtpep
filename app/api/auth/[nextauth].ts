import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/app/_lib/prisma";

const handler = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        GoogleProvider ({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        AppleProvider ({
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SCRET!,
        })
    ],
}); 

export { handler as GET, handler as POST };