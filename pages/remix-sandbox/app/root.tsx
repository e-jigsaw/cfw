import { Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <title>It works!</title>
        <Meta></Meta>
      </head>
      <body>
        <Outlet></Outlet>
        <Scripts></Scripts>
      </body>
    </html>
  );
}
