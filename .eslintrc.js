module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-typescript", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#eslint-configs
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
        "next/core-web-vitals",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
        "react-hooks",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/destructuring-assignment": ["off"], // props.*の形で使えるように
        "arrow-body-style": 0
    }
};
