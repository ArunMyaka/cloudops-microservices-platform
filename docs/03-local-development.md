# Local Development

## Prerequisites

Install:

- Ubuntu or WSL
- Git
- Docker
- Docker Compose
- Python 3
- Node.js, only if using a React frontend

## Local Workflow

1. Clone the repository.
2. Copy `.env.example` to `.env`.
3. Start services with Docker Compose.
4. Run database migrations, if used.
5. Open the frontend and backend.
6. Check health and metrics endpoints.

## Expected Commands

```bash
git clone <your-repo-url>
cd cloudops-microservices-platform
cp .env.example .env
docker compose up --build
curl http://localhost:8000/health
curl http://localhost:8000/metrics
```

On Windows PowerShell:

```powershell
.\scripts\start-local.ps1
```

Then open:

- Frontend: http://localhost:8080
- Backend API docs: http://localhost:8000/docs
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000

Grafana credentials:

- Username: `admin`
- Password: `admin`

Backend tests:

```powershell
.\scripts\test-backend.ps1
```

## What To Document

For every service, document:

- What it does
- Which port it uses
- Which environment variables it needs
- How to view logs
- How to restart it
- How to debug common failures

## Common Failures To Learn

- Port already in use
- Wrong environment variables
- Database not ready
- Container exits immediately
- File permission errors
- Missing Docker network
