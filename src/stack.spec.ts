import { createStack } from "./stack";

test("test stack created", () => {
  const newStack = createStack<string>();
  expect(newStack.isEmpty()).toBe(true);
});

test("test item added to stack", () => {
  const newStack = createStack<string>();
  newStack.push("hello");

  expect(newStack.isEmpty()).toBe(false);
});

test("test multiple items pushed to stack at once", () => {
  const newStack = createStack<string>();
  newStack.push("hello", "there", "friend");

  expect(newStack.pop()).toBe("friend");
  expect(newStack.pop()).toBe("there");
  expect(newStack.pop()).toBe("hello");
  expect(newStack.pop()).toBe(undefined);
});

test("test item removed from stack", () => {
  const newStack = createStack<string>();
  newStack.push("hello");

  expect(newStack.isEmpty()).toBe(false);

  const poppedItem = newStack.pop();
  expect(poppedItem).toBe("hello");
  expect(newStack.isEmpty()).toBe(true);
});

test("test undefined returned from pop on empty stack", () => {
  const newStack = createStack<string>();
  expect(newStack.isEmpty()).toBe(true);

  const poppedItem = newStack.pop();
  expect(poppedItem).toBe(undefined);
});

test("test stack built from multiple args", () => {
  const newStack = createStack("hello", "there", "friend");
  expect(newStack.isEmpty()).toBe(false);

  expect(newStack.pop()).toBe("friend");
  expect(newStack.pop()).toBe("there");
  expect(newStack.pop()).toBe("hello");
  expect(newStack.pop()).toBe(undefined);
});
