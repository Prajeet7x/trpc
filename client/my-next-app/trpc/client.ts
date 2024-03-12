import { createTRPCClientProxy, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../../server/src/index";

const client = createTRPCClientProxy<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3005/trpc",
    }),
  ],
});

async function main() {
  const result = await client.helloWorld
  console.log(result)
}

main();
