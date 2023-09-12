// user.test.js
const db = require("../db");
const User = require("../models/user");

describe("User.get", () => {
  // Add a test user before running the test
  beforeEach(async () => {
    await db.query(
      "INSERT INTO users (username, first_name, last_name, email, phone, password) VALUES ('testuser', 'Test', 'User', 'test@user.com', '123-456-7890', 'testpassword')"
    );
  });

  // Remove the test user after running the test
  afterEach(async () => {
    await db.query("DELETE FROM users WHERE username = 'testuser'");
  });

  test("should throw an error if user not found", async () => {
    // We will use a non-existent username to trigger the error condition
    const nonExistentUser = "nonexistentuser";

    await expect(User.get(nonExistentUser)).rejects.toThrow();
  });

  test("should return user details if user found", async () => {
    const existingUser = "testuser";

    const user = await User.get(existingUser);
    expect(user).toBeTruthy();
    expect(user.username).toBe(existingUser);
  });
});
