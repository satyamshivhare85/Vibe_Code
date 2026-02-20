// Ye NextAuth middleware protection system hai.
// Ye decide karta hai kaun si route pe login zaroori hai aur kaun si public hai.
// Ye actual me route-level authorization guard hai.-->imp



// Har request ke aane se pehle run hota hai.

// Matlab:
// User jab bhi kisi page pe jayega →
// Ye code check karega allowed hai ya redirect karna hai.
import NextAuth from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
} from "@/routes";
import authConfig from "./auth.config";

//ye NextAuth ka middleware wrapper bna rha hai...
//req.auth provide krta hai
const { auth } = NextAuth(authConfig);

// @ts-ignore
export default auth((req) => { //request recive
  const { nextUrl } = req;
  //Agar user logged in hai → req.auth exist karegaNahi hai → null hoga
  const isLoggedIn = !!req.auth;

  //versioning type ./api/auth se start hai
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  //public route
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//auth routes
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //api/auth route nhi hai to null
  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL("/auth/sign-in" , nextUrl))
  }

  return null
});

export const config = {
  // copied from clerk
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};