import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt ({}) {

        },

        async session ({}) {

        }
    },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {label: '', type: '', },
                name: {label: '', type: '', },
                password: {label: '', type: '', }
            }
        })
    ]
})