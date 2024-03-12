// src/index.ts
import express from "express";

import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";

const tServer = initTRPC.create();

const appRouter = tServer.router({
  helloWorld: tServer.procedure.query(() => {
    return "Hi";
  }),
});

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:3005" }));
app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Express Server!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;
