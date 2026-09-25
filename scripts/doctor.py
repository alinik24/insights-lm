from pathlib import Path
import sys
print(f"node_project={Path('package.json').exists()}")
if not Path('package-lock.json').exists(): print('MISSING: package-lock.json'); raise SystemExit(1)
print('doctor=PASS')
