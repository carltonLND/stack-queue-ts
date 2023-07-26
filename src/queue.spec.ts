import { createQueue } from "./queue";

test("test queue created", () => {
  const newQueue = createQueue<string>();
  expect(newQueue.isEmpty()).toBe(true);
});

test("test item added to Queue", () => {
  const newQueue = createQueue<string>();
  newQueue.push("hello");

  expect(newQueue.isEmpty()).toBe(false);
});

test("test multiple items pushed to Queue at once", () => {
  const newQueue = createQueue<string>();
  newQueue.push("hello", "there", "friend");

  expect(newQueue.pop()).toBe("hello");
  expect(newQueue.pop()).toBe("there");
  expect(newQueue.pop()).toBe("friend");
});

test("test item removed from Queue", () => {
  const newQueue = createQueue<string>();
  newQueue.push("hello");

  expect(newQueue.isEmpty()).toBe(false);

  const poppedItem = newQueue.pop();
  expect(poppedItem).toBe("hello");
  expect(newQueue.isEmpty()).toBe(true);
});

test("test undefined returned from pop on empty Queue", () => {
  const newQueue = createQueue<string>();
  expect(newQueue.isEmpty()).toBe(true);

  const poppedItem = newQueue.pop();
  expect(poppedItem).toBe(undefined);
});

test("test Queue built from multiple args", () => {
  const newQueue = createQueue("hello", "there", "friend");
  expect(newQueue.isEmpty()).toBe(false);

  expect(newQueue.pop()).toBe("hello");
  expect(newQueue.pop()).toBe("there");
  expect(newQueue.pop()).toBe("friend");
});

test("test peek returns the next item on Queue without removing it", () => {
  const newQueue = createQueue("hello", "there");
  const peekedItem = newQueue.peek();

  expect(peekedItem).toBe("hello");
  expect(newQueue.isEmpty()).toBe(false);
});
