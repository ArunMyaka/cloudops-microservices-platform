# Architecture

## System Overview

The project simulates a realistic small-company platform:

- Developers push code to GitHub or GitLab.
- CI validates the code, builds containers, scans them, and pushes images.
- Terraform provisions AWS infrastructure.
- Ansible configures servers when EC2-based deployment is used.
- Kubernetes runs the application.
- Argo CD continuously syncs Kubernetes manifests from Git.
- Prometheus, Grafana, Loki, ELK, and OpenTelemetry provide observability.

## Environments

Use two environments:

- `dev`: automatic deployments, cheaper resources
- `prod`: production-style configuration, manual approval, stronger security

You do not need expensive production infrastructure. The goal is to demonstrate production thinking.

## Core Components

| Area | Tool | Purpose |
|---|---|---|
| OS | Ubuntu / WSL | Local Linux practice |
| VCS | Git, GitHub, GitLab | Source control and collaboration |
| CI/CD | GitHub Actions, GitLab CI, Jenkins | Automated build and deployment |
| Containers | Docker, Docker Compose | Local packaging and development |
| Orchestration | Kubernetes | Production-style app runtime |
| GitOps | Argo CD | Declarative deployment from Git |
| Cloud | AWS | Infrastructure platform |
| IaC | Terraform | Cloud resource provisioning |
| Config | Ansible | Server configuration |
| Metrics | Prometheus | Metrics collection |
| Dashboards | Grafana | Visualization |
| Logs | Loki / ELK | Log storage and search |
| Traces | OpenTelemetry | Distributed tracing |
| Security | IAM, SSH, Secrets | Access control and protection |

## Minimum Viable Version

The first complete version should include:

- FastAPI backend
- PostgreSQL
- Docker Compose
- GitHub Actions
- Terraform EC2 deployment
- Ansible Docker setup
- Basic Prometheus and Grafana

After that works, add Kubernetes and Argo CD.

## Advanced Version

The advanced version should include:

- EKS or local Kind cluster
- Helm chart
- Argo CD sync
- Loki logs
- OpenTelemetry traces
- Image scanning
- Separate dev and prod environments
- Better secrets management

