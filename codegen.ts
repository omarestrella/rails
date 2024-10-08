import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
	schema: "https://backboard.railway.app/graphql/v2",
	documents: ["src/**/*.tsx", "src/**/*.ts"],
	generates: {
		"./src/__generated__/": {
			preset: "client",
			presetConfig: {
				gqlTagName: "gql",
			},
		},
	},
}

export default config
