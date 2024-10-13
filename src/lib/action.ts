export type Action<Type extends string, Payload> = {
	type: Type
	payload: Payload
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export type ActionPayload<TheAction> =
	TheAction extends Action<infer _Type, infer Payload> ? Payload : never
