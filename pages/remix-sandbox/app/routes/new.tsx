import { ActionFunctionArgs, redirect } from "@remix-run/cloudflare";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  console.log(body);
  return redirect("/");
}
