// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       name: "Credentials",
//       authorize: async (credentials) => {
//         const user = await authenticateUser(
//           credentials.email,
//           credentials.password
//         ); // Custom auth logic
//         if (user) return user;
//         throw new Error("Invalid credentials");
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: { jwt: true },
// });
