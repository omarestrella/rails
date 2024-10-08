import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
	const session = request.cookies.get("session")

	if (
		session?.value === process.env.SESSION_TOKEN ||
		request.url.endsWith("/login")
	) {
		return NextResponse.next()
	}

	return NextResponse.redirect(new URL("/login", request.url), 302)
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!_next/static|_next/image|favicon.ico|graphql).*)",
	],
}
