// src/index.ts
import express from "express";

import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const tServer = initTRPC.create();

const router = tServer.router({
  helloWorld: tServer.procedure.query(() => {
    return "Hi";
  }),
});

const app = express();
const port = 3001;

app.use("/trpc", createExpressMiddleware({router: router}));

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Express Server!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
