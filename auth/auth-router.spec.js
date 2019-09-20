// require("dotenv").config();
const request = require("supertest");
const server = require("../api/server.js");

describe("POST /register", () => {
  it("should return a 201 status code", async () => {
    const result = await request(server)
      .post("/api/auth/register")
      .send({ username: "testing1000", password: "testing" });
    expect(result.status).toBe(201);
  });
  it("should return an object with new user", async () => {
    const result = await request(server)
      .post("/api/auth/register")
      .send({ username: "test2000", password: "testing2" });
    expect(result.status).toBe(201);
    expect(typeof result.body).toBe("object");
  });
});

describe("POST /login", () => {
  it("should return a 200 status code", async () => {
    const result = await request(server)
      .post("/api/auth/login")
      .send({ username: "testing100", password: "testing" });

    // console.log("RESULT", result);

    expect(result.status).toBe(200);
  });

  it("should return 400 for invalid body", async () => {
    const result = await request(server)
      .post("/api/auth/login")
      .send({ username: "", password: "" });
    expect(result.status).toBe(400);
  });
});
