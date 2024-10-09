import { cn } from "@/lib/utils"

export type Status = "success" | "error" | "warning" | "neutral" | "busy"

type StatusDotProps = {
	status: Status
	animate?: boolean
	className?: string
}

export function StatusDot({ status, animate, className }: StatusDotProps) {
	const statusColors = {
		success: "bg-green-500",
		error: "bg-red-500",
		warning: "bg-yellow-500",
		neutral: "bg-gray-500",
		busy: "bg-orange-500",
	}

	const glowColors = {
		success: "shadow-green-500/30",
		error: "shadow-red-500/30",
		warning: "shadow-yellow-500/30",
		neutral: "shadow-gray-500/30",
		busy: "shadow-orange-500/30",
	}

	return (
		<div
			className={cn(
				"h-3 w-3 rounded-full",
				statusColors[status],
				`shadow-[0_0_8px_3px] ${glowColors[status]}`,
				animate ? "animate-pulse" : "",
				className,
			)}
			aria-label={`Status: ${status}`}
		/>
	)
}
