import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google";
import { firestore } from "./firestore";



export const authOptions: NextAuthOptions = {
    adapter: FirestoreAdapter(firestore),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
    },
    providers: []
}