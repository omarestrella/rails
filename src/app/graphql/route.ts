export async function POST(request: Request) {
	const data = await request.json()

	const response = await fetch(`https://backboard.railway.app/graphql/v2`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.RAILWAY_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
	try {
		const json = await response.json()
		return Response.json(json)
	} catch (e) {
		console.error("[ERROR]", e)
		return Response.error()
	}
}
