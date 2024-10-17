import { Heading } from "@/components/ui/heading"
import { cn } from "@/lib/utils"
import { Button, Transition, TransitionChild } from "@headlessui/react"

import { LucideX } from "lucide-react"
import { useEffect, useRef } from "react"
import ReactDOM from "react-dom"

export function Slideout({
	title,
	children,
	onClose,
}: {
	title: string
	children: React.ReactNode
	onClose: () => void
}) {
	const contentContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const abortController = new AbortController()

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				onClose()
			}
		}

		document.addEventListener("keydown", handleKeyDown, {
			signal: abortController.signal,
		})

		document.addEventListener(
			"click",
			(event) => {
				if (
					!contentContainerRef.current?.contains(event.target as Node) &&
					event.target !== contentContainerRef.current
				) {
					onClose()
				}
			},
			{ signal: abortController.signal },
		)

		return () => {
			abortController.abort()
		}
	}, [onClose])

	return ReactDOM.createPortal(
		<div className="fixed left-0 top-0 size-full justify-end">
			<Transition show appear>
				<TransitionChild>
					<div className="absolute z-0 flex size-full bg-black/70 transition duration-300 data-[closed]:opacity-0" />
				</TransitionChild>

				<TransitionChild>
					<div
						className={cn(
							"absolute right-0 z-10 flex h-full w-3/5 bg-white transition ease-in-out",
							"data-[closed]:opacity-0",
							"data-[enter]:data-[closed]:translate-x-full data-[enter]:duration-300",
							"data-[leave]:data-[closed]:-translate-x-full data-[leave]:duration-300",
						)}
						ref={contentContainerRef}
					>
						<div className="size-full">
							<Button onClick={onClose} className="absolute right-2 top-2">
								<LucideX size={24} />
							</Button>
							<div className="grid h-full grid-rows-[min-content,minmax(0,1fr)] gap-4 p-4">
								<Heading level={2}>{title}</Heading>
								<div>{children}</div>
							</div>
						</div>
					</div>
				</TransitionChild>
			</Transition>
		</div>,
		document.body,
	)
}
