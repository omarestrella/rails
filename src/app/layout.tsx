/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import "./globals.css"
import { client, gql } from "@/api/client"
import { cookies } from "next/headers"
import Link from "next/link"

import { Inter } from "next/font/google"

const inter = Inter({
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Deployer",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { data } = await client.query({
		query: gql`
			query Me {
				me {
					name
					email
					avatar
				}
			}
		`,
	})

	const sessionCookie = cookies().get("session")?.value
	const hasSession =
		sessionCookie && sessionCookie === process.env.SESSION_TOKEN

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`antialiased ${inter.className}`}>
				{hasSession ? (
					<div className="h-12 w-screen border-b">
						<div className="mx-auto flex h-full w-3/5 items-center justify-between">
							<div className="text-lg font-bold">
								<Link href="/">Deployer</Link>
							</div>
							<div>
								<img
									src={data.me.avatar}
									className="h-8 w-8 rounded-full"
									alt="user"
								/>
							</div>
						</div>
					</div>
				) : null}
				<div className="mx-auto w-3/5 py-4">{children}</div>
			</body>
		</html>
	)
}
