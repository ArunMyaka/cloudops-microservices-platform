# Cloud Infrastructure

## AWS Resources

Start with a simple EC2-based deployment before moving to Kubernetes.

Provision:

- VPC
- Public subnet
- Private subnet, optional at first
- Internet gateway
- Route table
- Security group
- EC2 instance
- IAM role
- S3 bucket

## Terraform Layout

```text
infra/terraform/
  environments/
    dev/
      main.tf
      variables.tf
      outputs.tf
      terraform.tfvars.example
    prod/
  modules/
    network/
    compute/
    security/
    storage/
```

## Security Group Rules

Recommended starting rules:

- SSH from your IP only
- HTTP from anywhere only if required
- HTTPS from anywhere only if configured
- Application ports should not be open publicly unless behind a load balancer

## Remote State

Use S3 for Terraform state after local Terraform works.

Document:

- Bucket name
- State key
- Region
- Locking approach, if used

## Cost Control

Use:

- Small EC2 instances
- Short-lived test environments
- AWS budgets
- Destroy unused resources

Always document how to destroy the environment:

```bash
terraform destroy
```

