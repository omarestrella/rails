import { intlFormatDistance } from "date-fns"

export function getServiceTimeSinceDeploy(date: string) {
	return intlFormatDistance(new Date(date), new Date(), {
		style: "narrow",
	})
}
