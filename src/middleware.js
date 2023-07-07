import { NextResponse } from "next/server";

export default function middleware(request) {
  if (request.nextUrl.pathname != "/about") {
    return NextResponse.redirect(new URL("/about", request.url));
  }
}

export const config = {
  matcher: "/student:path*",
};
// matcher : ["/student:path*","/student:path*",] 1 thi vadhare page mate middleware lagavu hoy tyare
