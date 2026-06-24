# Interview Guide

## Short Project Explanation

I built a production-style DevOps platform for a containerized web application. The project includes Docker-based local development, CI/CD pipelines, AWS infrastructure with Terraform, server configuration with Ansible, Kubernetes deployments, GitOps with Argo CD, and observability using Prometheus, Grafana, Loki, and OpenTelemetry.

## What To Explain Clearly

- Why Docker was used
- How Docker Compose differs from Kubernetes
- What the CI/CD pipeline does
- How Terraform manages AWS resources
- Why Ansible is still useful
- How Argo CD implements GitOps
- How metrics, logs, and traces help debugging
- How IAM and security groups protect the system

## Strong Resume Bullets

- Built and documented an end-to-end DevOps platform on AWS using Docker, Terraform, Ansible, Kubernetes, Argo CD, and GitHub Actions.
- Automated CI/CD workflows for linting, testing, Docker image builds, image scanning, and deployment to development and production-style environments.
- Provisioned AWS networking, compute, IAM, security groups, and storage using reusable Terraform modules.
- Implemented observability with Prometheus, Grafana, Loki, and OpenTelemetry to monitor application health, logs, and traces.
- Applied DevOps security practices including least privilege IAM, restricted SSH access, secret management, and container image scanning.

## Common Interview Questions

### Docker

- What is the difference between an image and a container?
- Why use multi-stage builds?
- How do you debug a container that exits immediately?

### Kubernetes

- What is the difference between Deployment, Service, and Ingress?
- How do ConfigMaps and Secrets differ?
- How would you roll back a bad deployment?

### Terraform

- What is Terraform state?
- Why use modules?
- What happens during `terraform plan`?

### CI/CD

- What happens when a developer pushes code?
- How are secrets handled in the pipeline?
- What should block a production deployment?

### AWS

- What is a VPC?
- Why use security groups?
- How would you restrict SSH?

### Observability

- What is the difference between metrics, logs, and traces?
- How would you debug high latency?
- What dashboard would you create first?

## Demo Script

Use this order in interviews:

1. Show architecture diagram.
2. Run app locally with Docker Compose.
3. Show CI/CD pipeline.
4. Show Terraform infrastructure.
5. Show Kubernetes manifests.
6. Show Argo CD sync.
7. Show Grafana dashboard.
8. Explain one real problem you debugged.

