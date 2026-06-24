# Kubernetes And GitOps

## Kubernetes Objects

Create manifests for:

- Namespace
- Deployment
- Service
- ConfigMap
- Secret
- Ingress
- HorizontalPodAutoscaler

## Recommended Learning Order

1. Run app with Docker Compose.
2. Run app on local Kubernetes with Kind or Minikube.
3. Add Helm or Kustomize.
4. Add Argo CD.
5. Move to AWS EKS only if budget allows.

## GitOps Flow

1. Developer changes code.
2. CI builds and pushes a container image.
3. CI updates the Kubernetes manifest image tag.
4. Manifest change is committed to Git.
5. Argo CD detects the change.
6. Argo CD syncs the cluster.

## Argo CD Deliverables

Create:

- `gitops/argocd/project.yml`
- `gitops/argocd/application-dev.yml`
- `gitops/argocd/application-prod.yml`

## What To Screenshot

- Argo CD app healthy
- Argo CD sync history
- Kubernetes pods running
- Ingress route working

