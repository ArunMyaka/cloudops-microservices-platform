#!/usr/bin/env bash
set -euo pipefail

sudo apt-get update
sudo apt-get install -y git curl make python3 python3-venv docker.io docker-compose-plugin
sudo usermod -aG docker "$USER"

echo "Installed base tools. Log out and log back in for Docker group permissions."

