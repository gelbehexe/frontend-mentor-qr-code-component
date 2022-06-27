module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "indent": "off",
        "linebreak-style": 0,
        "no-console": ["error", { allow: ["warn", "error"] }],
    },
};
