module.exports = {
	"root": true,
	"env": {
		"browser": true
	},
	"extends": require.resolve("@umijs/lint/dist/config/eslint"),
	"rules": {
		"react/button-has-type": "off",
		"@typescript-eslint/no-unused-expressions": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"array-callback-return": "off",
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
