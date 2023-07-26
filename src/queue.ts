export interface Queue<T> {
  push: (...items: T[]) => void;
  pop: () => T | undefined;
  isEmpty: () => boolean;
  peek: () => T;
}

export function createQueue<T>(...queueFrom: T[]): Queue<T> {
  const queueItems: T[] = [...queueFrom];

  return {
    push: (...items: T[]) => {
      queueItems.push(...items);
    },
    pop: () => queueItems.shift(),
    isEmpty: () => queueItems.length === 0,
    peek: () => queueItems[0],
  };
}
