# Gilbert Chavez — Portfolio

Static portfolio served with nginx (see `Dockerfile`).

## Local preview

```bash
docker compose up --build
```

Open http://localhost:8080

## Deploy

Rebuild the portfolio container on the server after pushing changes:

```bash
docker compose -f gilmapi.yml up -d --build portfolio
```
