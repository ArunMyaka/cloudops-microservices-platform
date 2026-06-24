$ErrorActionPreference = "Stop"

Set-Location "app/backend"
python -m pip install -r requirements.txt
python -m pytest

