To deploy it you must to have access to digitalocean console. 
* Add this machine to `docker-machine` //TODO
* First time deployment

```bash
docker-compose -f compose-base.yml -f compose-uat.yml -p frontend up --no-deps --force-recreate
```
* When you need to rebuild your service and deploy new version
```bash
docker-compose build frontend
docker-compose up --no-deps -d frontend
```