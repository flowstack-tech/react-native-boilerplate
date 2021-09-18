module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort", "import"],
  rules: {
    quotes: [2, "double"],
    "sort-imports": 0,
    "import/order": 0,
    "simple-import-sort/exports": 2,
    "simple-import-sort/imports": [
      2,
      {
        groups: [
          ["^\\u0000"],
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          ["^react$", "^react-native$"],
          ["^@?\\w"],
          ["^@src(/.*|$)"],
          ["^@(common|api|components|constants|contexts|hooks|misc|styles|language)(/.*|$)"],
          ["^@features(/.*|$)"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "import/first": 2,
    "import/newline-after-import": 2,
    "import/no-duplicates": 2,
    "prettier/prettier": [
      2,
      {
        endOfLine: "auto",
      },
    ],
  },
};
