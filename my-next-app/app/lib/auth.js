import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google";
import { firestore } from "./firestore";



export const AuthOptions = {
    adapter: FirestoreAdapter(firestore),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
    },
    providers: []
}