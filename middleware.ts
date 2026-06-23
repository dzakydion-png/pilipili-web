import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const adminRoles = new Set(["ADMIN", "FINANCE", "SUPER_ADMIN"]);
const authSecret = process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET;

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({
    req: request,
    secret: authSecret,
  });

  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/account") && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.href);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/admin")) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.nextUrl.href);
      return NextResponse.redirect(loginUrl);
    }

    if (!adminRoles.has(String(token.role))) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/account/:path*", "/admin/:path*"],
};
