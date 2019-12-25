module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    // Indent with 4 spaces
    "indent": ["error", 4],

    // Indent JSX with 4 spaces
    "react/jsx-indent": ["error", 4],

    // Indent props with 4 spaces
    "react/jsx-indent-props": ["error", 4],
  },
  'globals': {
    "fetch": false
  },

}