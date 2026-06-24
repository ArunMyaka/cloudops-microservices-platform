# Security

## Core Rules

- Do not commit secrets.
- Restrict SSH to your IP.
- Use least privilege IAM policies.
- Rotate keys if exposed.
- Store CI/CD secrets in the CI platform.
- Use `.env.example`, not real `.env` files.
- Keep security groups narrow.
- Scan container images.

## IAM

Document:

- Which IAM users or roles exist
- Why each permission is needed
- Which permissions were intentionally avoided

## SSH

Document:

- How keys are generated
- Where public keys are used
- How private keys are protected
- How access can be revoked

## Secrets Management

Start with:

- GitHub Actions secrets
- Environment variables

Then improve with:

- AWS Secrets Manager
- External Secrets Operator for Kubernetes, optional

## Container Security

Add:

- Non-root container user
- Minimal base images
- Image scanning
- `.dockerignore`
- No secrets in image layers

## Cloud Security

Checklist:

- SSH limited to your IP
- Public access reviewed
- S3 bucket public access blocked
- IAM least privilege
- No hardcoded credentials
- Budget alarm configured

