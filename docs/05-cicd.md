# CI/CD

## Pipeline Stages

Your pipeline should include:

1. Checkout
2. Install dependencies
3. Lint
4. Test
5. Build Docker image
6. Scan Docker image
7. Push Docker image
8. Deploy to dev
9. Manual approval for prod-style deployment

## GitHub Actions First

Start with GitHub Actions because recruiters commonly recognize it and it is simple to demo.

Recommended workflow files:

```text
.github/workflows/
  ci.yml
  docker-build.yml
  deploy-dev.yml
```

## GitLab CI Later

Add GitLab CI as a second implementation after GitHub Actions works.

This lets you say:

> I implemented the same CI/CD lifecycle in both GitHub Actions and GitLab CI to understand platform differences.

## Jenkins Later

Use Jenkins to show traditional CI/CD knowledge:

- Jenkinsfile
- Agent configuration
- Credentials
- Pipeline stages

Do Jenkins after cloud and Docker are working.

## Secrets

Never commit real secrets.

Use:

- GitHub Actions secrets
- GitLab CI variables
- Jenkins credentials
- `.env.example` for documentation only

