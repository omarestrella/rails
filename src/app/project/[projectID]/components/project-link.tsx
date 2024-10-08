"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function ProjectLink({
	projectID,
	children,
	page,
}: {
	projectID: string
	page: string
	children: React.ReactNode
}) {
	const path = usePathname()
	const url = new URL(path, "http://localhost:3000")
	const [, restOfPath] = url.pathname.split(projectID)

	const isActive =
		restOfPath.length === 0 && page === "/" ? true : restOfPath.startsWith(page)

	return (
		<Link
			href={`/project/${projectID}${page}`}
			className={`${isActive ? "border-b-accent-foreground border-b" : ""}`}
		>
			{children}
		</Link>
	)
}
