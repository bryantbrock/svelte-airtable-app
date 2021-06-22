### Svelte Airtable Application

Running is simple, though you need a `.env` file with `HOST`, `AIRTABLE_BASE_KEY`, `AIRTABLE_API_KEY`, set. Start by building the image on your machine (you will need `docker` installed:
```
docker build -t svelte-client .  
```

Once the images is built, you can run an instance in a container (include `-d` flag for detached mode):
```
docker run --env-file .env -p 5000:5000 --name <your-container-name> svelte-client
```
