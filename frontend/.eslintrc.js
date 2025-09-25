module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2023: true
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [ "vue", "@typescript-eslint", "prettier" ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/no-used": [ "error", { argsIgnorePattern: "^_" } ],
        "vue-require-default-prop": "off",
        "vue/multi-word-component-names": "off"
    },
    ignorePatterns: [ "dist", "node_modules" ]
};
