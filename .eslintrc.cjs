module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential'
	],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		'vue/html-closing-bracket-newline': ['error', {
			'singleline': 'never',
			'multiline': 'always'
		}],
		'vue/html-closing-bracket-spacing': 'error',
		'vue/max-attributes-per-line': ['error', {
			'singleline': 5,
			'multiline': {
				'max': 1,
			}
		}],
		'quotes': ['error', 'single'],
		'eqeqeq': ['error', 'always'],
		'no-else-return': ['error', { allowElseIf: false }],
		'no-eval': 'error',
		'no-script-url': 'error',
		'no-useless-return': 'error',
		'no-multiple-empty-lines': ['error', { max: 1 }],
		'arrow-body-style': ['error', 'as-needed'],
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'error',
		'object-curly-spacing': ['error', 'always'],
		'vue/no-use-v-if-with-v-for': 'warn',
		'vue/padding-line-between-blocks': ['error', 'always'],
		'vue/require-direct-export': 'error',
		'vue/require-name-property': 'warn',
		'vue/v-on-function-call': ['error', 'never'],
		'vue/no-multiple-template-root': 'off'

	}
};
