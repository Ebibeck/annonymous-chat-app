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
    providers: [
        EmailProvider({
          server: process.env.EMAIL_SERVER,
          from: process.env.EMAIL_FROM
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
      ],
      callbacks: { 
        async signIn({ account, profile }) {
          if (account.provider === "google") {
            return profile.email_verified && profile.email.endsWith("@example.com")
          }
          return true 
        },
      },
}