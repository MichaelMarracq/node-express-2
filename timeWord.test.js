const timeWord = require("./timeWord");

test("Converts midnight time correctly", () => {
  expect(timeWord("00:00")).toBe("midnight");
});

test("Converts morning time correctly", () => {
  expect(timeWord("06:30")).toBe("six thirty am");
});

test("Converts noon time correctly", () => {
  expect(timeWord("12:00")).toBe("noon");
});

test("Converts afternoon time correctly", () => {
  expect(timeWord("15:45")).toBe("three forty five pm");
});

test("Converts evening time correctly", () => {
  expect(timeWord("21:20")).toBe("nine twenty pm");
});
