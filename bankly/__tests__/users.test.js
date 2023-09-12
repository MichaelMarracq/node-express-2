const request = require("supertest");
const app = require("../app");
const User = require("../models/user");

describe("DELETE /users/:username", () => {
  test("should delete the specified user", async () => {
    // Create a test user that we will delete
    await User.register({
      username: "testuser",
      password: "password",
      first_name: "Test",
      last_name: "User",
      email: "testuser@example.com",
      phone: "123-456-7890",
    });

    // Send the delete request to the route
    const response = await request(app).delete("/users/testuser").send();

    // Check if the response indicates successful deletion
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "deleted" });

    // Check if the user is actually deleted from the database
    const user = await User.get("testuser");
    expect(user).toBeUndefined();
  });
});
