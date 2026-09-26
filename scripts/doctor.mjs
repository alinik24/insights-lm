import { existsSync } from "node:fs";

const major = Number(process.versions.node.split(".")[0]);
const checks = [
  [major >= 18, `node=${process.versions.node} (requires >=18)`],
  [existsSync("package-lock.json"), "lockfile=package-lock.json"],
  [existsSync("node_modules"), "dependencies=node_modules"],
  [existsSync(".env.example"), "safe_config=.env.example"],
];

for (const [ok, message] of checks) console.log(`${ok ? "PASS" : "MISSING"}: ${message}`);
if (checks.some(([ok]) => !ok)) process.exit(1);
console.log("doctor=PASS");
