const expect = require("chai").expect;

describe("canary test", () => {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", () => {
    expect(true).to.be.true;
  });
});
