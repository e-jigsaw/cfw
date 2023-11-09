import type { ActionFunctionArgs, LoaderFunction } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

interface Env {
  remix_sandbox: KVNamespace;
}

export const loader: LoaderFunction = async ({ context }) => {
  let env = context.env as Env;
  const res = await env.remix_sandbox.list();
  console.log(res);
  return json({ ok: true });
};

export default function Top() {
  const data = useLoaderData<typeof loader>();
  return (
    <form method="POST" action="/new">
      <label>
        <input name="name" type="text"></input>
      </label>
      <button type="submit">Create</button>
    </form>
  );
}
