# birthday-store-api

1. Clone repository
2. Go to folder
```bash
cd birthday-store-api/
```
3. Create /data folder to store MongoDB data
```bash
mkdir data
```
4. Create .env file and define following variables
````
MONGO_USERNAME=root
MONGO_PASSWORD=example
MONGO_PORT=27017
MONGO_DB=birthdaysDB
````
NOTE: Remember to change them accordingly in Dockerfile and docker-compose.yml files!

5. Launch app!

```bash
docker compose up -d
```