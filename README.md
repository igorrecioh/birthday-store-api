# birthday-store-api
## Build status

[![Build Status](https://github.com/igorrecioh/birthday-store-api/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/igorrecioh/birthday-store-api/actions/workflows/node.js.yml)

## Setup
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

## Usage
### Mongo-Express
```bash
localhost:8081
```
### Index
```bash
localhost:3000
```

### API Rest
- Get all birthdays
```bash
localhost:3000/cumples (GET request)
```
- Post new birthday
  ```json
  {
    nombre: blah,
    fecha: 01/02/1234
  }
  ```
  Query
  ```bash
  localhost:3000/cumples (POST request)
  ```
- Delete birthday by id
```bash
localhost:3000/cumples/{id} (DELETE request)
```
- Update birthday by id
  ```json
  {
    nombre: blah,
    fecha: 01/02/1234
  }
  ```
  Query
  ```bash
  localhost:3000/cumples/{id} (PUT request)
  ```