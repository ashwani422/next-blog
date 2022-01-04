import NextAuth from "next-auth/next"
import GithubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from "../../../lib/mongodb"

export default NextAuth(
  {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
    ],
    secret: process.env.SECRET,
    session: {
      strategy: 'jwt'
    },
    adapter: MongoDBAdapter(clientPromise)
  }
)