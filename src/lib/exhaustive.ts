export function exhaustiveCheck(x: never): never {
	throw new Error(`Exhaustive check failed: ${x}`)
}
