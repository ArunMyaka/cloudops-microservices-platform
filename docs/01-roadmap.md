# Roadmap

This roadmap turns your current basics into one complete job-ready DevOps project.

## Phase 1: Linux Foundation

Practice:

- File system navigation
- Permissions and ownership
- Process management
- Package installation
- Environment variables
- System logs
- SSH
- Bash scripts

Deliverables:

- `scripts/setup-dev-machine.sh`
- `scripts/backup-logs.sh`
- `docs/linux-notes.md`

Proof:

- Screenshot of commands running in Ubuntu or WSL
- Notes explaining `chmod`, `chown`, `ps`, `systemctl`, `journalctl`, `apt`, and SSH keys

## Phase 2: Application

Build:

- Python FastAPI backend
- Basic frontend
- PostgreSQL database
- `/health` endpoint
- `/metrics` endpoint
- `.env.example`

Deliverables:

- `app/backend`
- `app/frontend`
- Local app documentation

Proof:

- App running locally
- API docs screenshot
- Health check screenshot

## Phase 3: Git Workflow

Practice:

- Feature branches
- Pull requests
- Conventional commits
- `.gitignore`
- Protected branches
- GitHub issues

Deliverables:

- GitHub repository
- Pull request history
- Issue board

Proof:

- Screenshot of pull request
- Screenshot of commit history

## Phase 4: Docker

Build:

- Backend Dockerfile
- Frontend Dockerfile
- Docker Compose for app, database, and monitoring starter
- Named volumes
- Container health checks

Deliverables:

- `Dockerfile`
- `docker-compose.yml`
- `docs/03-local-development.md`

Proof:

- `docker compose ps`
- App reachable locally
- Logs from containers

## Phase 5: CI/CD

Build pipeline stages:

- Lint
- Test
- Build image
- Scan image
- Push image
- Deploy to dev

Use one primary CI tool first:

- Recommended: GitHub Actions
- Add GitLab CI later as comparison
- Add Jenkins only after the first pipeline works

Deliverables:

- `.github/workflows/ci.yml`
- Optional `.gitlab-ci.yml`
- Optional `Jenkinsfile`

Proof:

- Successful pipeline screenshot
- Failed pipeline screenshot with explanation of fix

## Phase 6: AWS With Terraform

Provision:

- VPC
- Public and private subnets
- Internet gateway
- Route tables
- Security groups
- EC2 instance
- S3 bucket for artifacts or Terraform state
- IAM role with least privilege

Deliverables:

- `infra/terraform/environments/dev`
- `infra/terraform/modules/network`
- `infra/terraform/modules/compute`
- `infra/terraform/modules/security`
- `docs/04-cloud-infrastructure.md`

Proof:

- `terraform plan`
- `terraform apply`
- AWS console screenshots

## Phase 7: Ansible

Configure EC2:

- Install Docker
- Create app user
- Configure firewall basics
- Pull and run container
- Install monitoring agent, optional

Deliverables:

- `infra/ansible/playbooks/setup-server.yml`
- `infra/ansible/inventories/dev.ini`

Proof:

- Ansible playbook output
- SSH into EC2 and verify Docker

## Phase 8: Kubernetes

Deploy:

- Namespace
- Deployment
- Service
- ConfigMap
- Secret
- Ingress
- Horizontal Pod Autoscaler
- Resource requests and limits

Recommended local learning:

- Kind or Minikube first
- Then EKS if budget allows

Deliverables:

- `k8s/base`
- `k8s/overlays/dev`
- `k8s/helm`

Proof:

- `kubectl get pods`
- `kubectl describe deployment`
- App accessed through ingress

## Phase 9: GitOps With Argo CD

Build:

- Argo CD installation
- Argo CD application manifest
- Auto-sync for dev
- Manual sync for prod-style environment

Deliverables:

- `gitops/argocd/application-dev.yml`
- `docs/06-kubernetes-gitops.md`

Proof:

- Argo CD dashboard screenshot
- Git commit that triggers sync

## Phase 10: Observability

Implement:

- Prometheus metrics scraping
- Grafana dashboard
- Loki logs
- Optional ELK stack
- Optional OpenTelemetry traces

Deliverables:

- `observability/prometheus`
- `observability/grafana`
- `observability/loki`
- `observability/opentelemetry`

Proof:

- Grafana dashboard screenshot
- Log query screenshot
- Trace screenshot, optional

## Phase 11: Security

Add:

- IAM least privilege
- Security group rules
- SSH key management
- No secrets in Git
- GitHub Actions secrets
- Container image scanning
- Dependency scanning
- Basic cloud cost controls

Deliverables:

- `docs/08-security.md`
- Security checklist

Proof:

- Screenshot of secrets configured
- Security group explanation
- IAM policy explanation

## Phase 12: Final Interview Prep

Prepare:

- Architecture explanation
- Failure scenarios
- Debugging stories
- Cost explanation
- Security tradeoffs
- CI/CD walkthrough

Deliverables:

- `docs/09-interview-guide.md`
- Final project screenshots
- Resume bullet points

