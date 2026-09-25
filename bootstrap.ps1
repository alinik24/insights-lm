$ErrorActionPreference = "Stop"
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { Write-Error "MISSING: Node.js" }
npm ci
Write-Host "doctor=PASS"
