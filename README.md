### Svelte Client

Running is simple, though you need a `.env` file with `HOST` set. Then, simply run
```
docker run --env-file .env -p 5000:5000 --name <your-container-name> svelte-client
```