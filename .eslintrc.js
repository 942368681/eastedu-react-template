module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "Babel": true,
        "React": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "indent": 0,
        "linebreak-style": 0,
        "no-undef": 1,
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "react/jsx-indent": 0, // 解决react里面的缩进问题
        "react/jsx-indent-props": 0,
        "comma-dangle": 0,
        "no-tabs": "off", // 禁止缩进错误
        // 允许使用 for in
        "no-restricted-syntax": 0,
        "guard-for-in": 0,
        "no-extra-semi": 0,
        "eol-last": 0,
        "react/prop-types": 0,
        "lines-between-class-members": 0,
        "space-before-function-paren": 0,
        "no-trailing-spaces": 0,
        "no-unused-vars": 1,
        "no-console": 1,
        "import/no-unresolved": 0,
        "class-methods-use-this": 0,
        "arrow-parens": 0,
        "arrow-body-style": 0,
        "quote-props": 0,
        "quotes": 0,
        "object-curly-newline": 0,
        // 允许在 .js 和 .jsx 文件中使用 jsx
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        // 不区分是否是 无状态组件
        "react/prefer-stateless-function": 0
    }
};