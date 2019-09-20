const request = require("supertest");
const server = require("../api/server.js");

describe("POST /register", () => {
  it("should return a 201 status code", async () => {
    const result = await request(server)
      .post("/api/auth/register")
      .send({ username: "test", password: "testing" });

    expect(result.status).toBe(201);
  });

  it("should return an object with new user", async () => {
    const result = await request(server)
      .post("/api/auth/register")
      .send({ username: "test2", password: "testing2" });

    expect(result.status).toBe(201);
    expect(typeof result.body).toBe("object");
  });
});
