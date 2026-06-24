# Troubleshooting

## Docker

Problem: Container exits immediately.

Check:

```bash
docker logs <container>
docker inspect <container>
docker compose ps
```

Problem: Port already in use.

Check:

```bash
sudo lsof -i :8000
```

## Linux

Problem: Permission denied.

Check:

```bash
ls -l
whoami
groups
chmod
chown
```

Problem: Service not running.

Check:

```bash
systemctl status <service>
journalctl -u <service>
```

## Terraform

Problem: Terraform wants to recreate a resource.

Check:

```bash
terraform plan
terraform state list
terraform state show <resource>
```

Problem: AWS permission denied.

Check:

```bash
aws sts get-caller-identity
```

Then review IAM permissions.

## Kubernetes

Problem: Pod is not running.

Check:

```bash
kubectl get pods
kubectl describe pod <pod>
kubectl logs <pod>
```

Problem: Service is unreachable.

Check:

```bash
kubectl get svc
kubectl get ingress
kubectl describe ingress <name>
```

## CI/CD

Problem: Pipeline fails during Docker build.

Check:

- Dockerfile path
- Build context
- Missing files in `.dockerignore`
- Environment variables
- Registry login

Problem: Deployment succeeds but app is broken.

Check:

- Image tag
- Kubernetes rollout
- App logs
- Environment variables
- Database connectivity

