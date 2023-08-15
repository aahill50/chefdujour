/* This contains the dynamic route handler for NextAuth.js which 
   will also contain all of the global NextAuth.js configurations. */

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import InstagramProvider from 'next-auth/providers/instagram';
// import OktaProvider from 'next-auth/providers/okta';
const callbackUrlDev = 'https://chefdujour-git-auth-aahill50.vercel.app//api/auth/callback/google'
const callbackUrlProd = 'https://chefdujour.vercel.app//api/auth/callback/google'

export const authOptions = {
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token, user }) {
            console.log('session:', session);
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken;
            return session;
        },
    },
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // InstagramProvider({
        //     clientId: process.env.INSTAGRAM_CLIENT_ID,
        //     clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
        // }),
        // OktaProvider({
        //     clientId: process.env.OKTA_CLIENT_ID,
        //     clientSecret: process.env.OKTA_CLIENT_SECRET,
        //     issuer: process.env.OKTA_ISSUER,
        // }),
    ],
};
export default NextAuth(authOptions);

