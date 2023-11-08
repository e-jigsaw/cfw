import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

interface Env {
  remix_sandbox: KVNamespace;
}

export const loader: LoaderFunction = async ({ context }) => {
  let env = context.env as Env;
  return json({ ok: true });
};

export default function Top() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return <h1>It works!!</h1>;
}
