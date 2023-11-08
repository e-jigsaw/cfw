import { Meta, Outlet, Scripts, Links, LiveReload } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html>
      <head>
        <title>It works!</title>
        <Meta></Meta>
        <Links></Links>
      </head>
      <body>
        <Outlet></Outlet>
        <Scripts></Scripts>
        <LiveReload></LiveReload>
      </body>
    </html>
  );
}
