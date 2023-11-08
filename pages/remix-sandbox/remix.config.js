/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  server: "./server.ts",
  serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: [/^(?!.*\b__STATIC_CONTENT_MANIFEST\b).*$/],
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
};
