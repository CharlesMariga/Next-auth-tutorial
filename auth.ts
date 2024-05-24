import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { db } from "./lib/db";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      // const existingUser = await getUserById(user.id!);

      // if (!existingUser || !existingUser.emailVerified) {
      //   return false;
      // }

      return true;
    },
    async session({ token, session }) {
      console.log("Session token: ", token);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token }) {
      console.log("Token: ", token);
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      console.log("Existing user: ", existingUser);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
});
