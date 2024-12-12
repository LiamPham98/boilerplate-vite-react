import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["gitmoji"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "merge",
        "wip",
      ],
    ],
  },
};

export default Configuration;
