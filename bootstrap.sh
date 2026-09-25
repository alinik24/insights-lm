#!/usr/bin/env bash
set -euo pipefail
command -v node >/dev/null || { echo "MISSING: Node.js"; exit 1; }
npm ci
echo "doctor=PASS"
