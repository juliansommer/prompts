// This can't be moved to TypeScript as theres still issues with NextAuth v5, but NextAuth v5 is required to fix this TypeScript error

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connectToDB from "@utils/database"
import User from "@models/user"
import extractUsername from "@utils/extractUsername"

export const { handlers } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      })

      session.user.id = sessionUser._id.toString()
      return session
    },

    async signIn({ profile }) {
      try {
        await connectToDB()

        // check if user already exists
        const userExists = await User.findOne({
          email: profile.email,
        })

        // if user doesnt exist, create new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: extractUsername(profile.email),
            image: profile.picture,
          })
        }

        return true
      } catch (error) {
        console.log("Sign In Fail: ", error)
        return false
      }
    },
  },
})
