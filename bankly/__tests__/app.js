const request = require("supertest");
const app = require("../app");
const path = require("path");
const fs = require("fs");

describe("app.js", () => {
  test("should only have one module.exports statement", () => {
    const filePath = path.join(__dirname, "../app.js");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const moduleExportsCount = fileContent.split("module.exports").length - 1;

    expect(moduleExportsCount).toBe(1);
  });
});
