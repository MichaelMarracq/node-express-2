const request = require("supertest");
const app = require("../app");
const User = require("../models/user");
const { authUser, requireLogin, requireAdmin } = require("../middleware/auth");

describe("POST /login", () => {
  test("should authenticate the user and return a token", async () => {
    // Register a test user
    const testUser = await User.register({
      username: "testuser",
      password: "testpassword",
      first_name: "Test",
      last_name: "User",
      email: "testuser@example.com",
      phone: "123-456-7890",
    });

    // Send a login request with the test user's credentials
    const response = await request(app).post("/login").send({
      username: "testuser",
      password: "testpassword",
    });

    // Check if the response contains a token
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeTruthy();

    // Check if the token is valid by decoding it and checking the username
    const token = response.body.token;
    const decodedToken = jwt.decode(token);
    expect(decodedToken.username).toBe("testuser");
  });
});

// auth middleware test

describe("authUser middleware", () => {
  test("should return 401 error for invalid token", async () => {
    const req = {
      body: {
        _token: "invalid.token",
      },
    };
    const res = {};
    const next = jest.fn();

    await authUser(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.any(Error));
    expect(next.mock.calls[0][0].status).toBe(401);
  });
});
