import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-DI-QjkXt.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const checkPassword_createServerFn_handler = createServerRpc({
  id: "acb1303650d06e817a2d0d022d2aa347de13d2c0bf924aa627ea52d7e5aa6258",
  name: "checkPassword",
  filename: "src/lib/auth.functions.ts"
}, (opts) => checkPassword.__executeServer(opts));
const checkPassword = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  password: stringType().min(1).max(64)
})).handler(checkPassword_createServerFn_handler, async ({
  data
}) => {
  const expected = (process.env.SITE_PASSWORD ?? "").trim();
  const given = data.password.trim();
  const norm = (s) => s.replace(/[-./\s]/g, "");
  const ok = expected.length > 0 && norm(given) === norm(expected);
  return {
    ok
  };
});
export {
  checkPassword_createServerFn_handler
};
