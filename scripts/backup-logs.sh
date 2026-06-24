#!/usr/bin/env bash
set -euo pipefail

mkdir -p backups
docker compose logs > "backups/docker-logs-$(date +%Y%m%d-%H%M%S).log"

