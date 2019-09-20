const request = require("supertest");
const server = require("../api/server.js");

describe("/GET jokes", () => {
  it("returns 400, no credentials provided", async () => {
    const result = await request(server)
      .post("/api/auth/login")
      .send({ username: "testing100", password: "testing" });

    const jokes = await request(server)
      .get("/api/jokes")
      .set("authorization", result.body.token);

    expect(jokes.body).not.toHaveLength(0);
    console.log("token", result.body.token);
  });

  it("should return status code 400, no credentials (without jwt)", async () => {
    const result = await request(server).get("/api/jokes");

    expect(result.status).toBe(400);
  });
});
