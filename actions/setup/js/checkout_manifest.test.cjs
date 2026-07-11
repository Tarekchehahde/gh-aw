import { describe, expect, it } from "vitest";

import { resolveManifestBaseBranch } from "./checkout_manifest.cjs";

describe("checkout_manifest.cjs", () => {
  it("prefers checked_out_ref over default_branch for PR base resolution", () => {
    expect(
      resolveManifestBaseBranch({
        checked_out_ref: "release/v1.0",
        default_branch: "main",
      })
    ).toBe("release/v1.0");
  });

  it("falls back to default_branch when checked_out_ref is absent", () => {
    expect(
      resolveManifestBaseBranch({
        default_branch: "main",
      })
    ).toBe("main");
  });
});
