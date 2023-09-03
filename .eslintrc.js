module.exports = {
	root: true,
	extends: require.resolve("@umijs/lint/dist/config/eslint"),
	"rules": {
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
		],
	}
};
