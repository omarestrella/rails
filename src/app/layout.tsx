/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { client, gql } from "@/api/client"
import { cookies } from "next/headers"

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
			<body className={`antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{hasSession ? (
						<div className="w-screen h-12 border-b">
							<div className="container mx-auto flex items-center justify-between h-full">
								<div className="text-lg font-bold">Deployer</div>
								<div>
									<img
										src={data.me.avatar}
										className="w-8 h-8 rounded-full"
										alt="user"
									/>
								</div>
							</div>
						</div>
					) : null}
					<div className="container mx-auto py-4">{children}</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
