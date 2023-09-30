module.exports = {
	"root": true,
	"env": {
		"browser": true
	},
	"extends": require.resolve("@umijs/lint/dist/config/eslint"),
	"rules": {
		"@typescript-eslint/no-unused-expressions": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
}
