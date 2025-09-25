module.exports = {
    root: false,
    extends: [
        "../.eslintrc.js",
        "plugin:@nestjs/recommended",
    ],
    plugins: [ "@nestjs" ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: [ "./tsconfig.json" ],
    },
    env: {
        node: true
    },
    ignorePatterns: [ "dist", "node_modules" ]
};
