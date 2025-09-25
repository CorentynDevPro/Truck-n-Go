module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2023: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [ "@typescript-eslint", "prettier" ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": [ "error", { argsIgnorePattern: "^_" } ]
    },
    ignorePatterns: [ "dist", "node_modules" ]
};
