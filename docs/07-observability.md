# Observability

## Metrics

Use Prometheus to collect:

- Request count
- Request latency
- Error count
- CPU usage
- Memory usage
- Container restarts

Use Grafana to display:

- API request rate
- Error rate
- Latency percentiles
- Pod health
- Node resource usage

## Logs

Start with Loki because it integrates cleanly with Grafana.

Then optionally add ELK:

- Elasticsearch for storage and search
- Logstash for processing
- Kibana for visualization

## Tracing

Use OpenTelemetry after metrics and logs work.

Trace:

- Incoming HTTP requests
- Database calls
- External service calls, if any

## Documentation Requirement

For every dashboard, document:

- What it shows
- Why it matters
- What a healthy value looks like
- What an unhealthy value means
- How you would debug an alert

