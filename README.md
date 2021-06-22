### Svelte Airtable Application

Running is simple, though you need a `.env` file with `HOST`, `AIRTABLE_BASE_KEY`, `AIRTABLE_API_KEY`, set. Then run
```
docker build -t svelte-client .  
```
```
docker run --env-file .env -p 5000:5000 --name <your-container-name> svelte-client
```
