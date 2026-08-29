const commitLint = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Allow capitalized scopes, e.g. "feat(Auth): authentication implemented"
    "scope-case": [0],
  },
};
export default commitLint;
