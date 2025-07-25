// src/db/drizzle.ts

// Mock DB client so imports don't break
export const db = {
  query: {},
  select: async () => [],
};
