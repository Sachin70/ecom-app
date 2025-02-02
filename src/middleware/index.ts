import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      // Return true to allow access, false to deny
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/profile/:path*", "/cart/:path*", "/checkout/:path*"],
};
