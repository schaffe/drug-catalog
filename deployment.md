To deploy it you must to have access to digitalocean console. 
* Add this machine to `docker-machine` //TODO
* First time deployment


```bash
docker volume create --name=nginx-certs
docker-compose -f compose-base.yml -f compose-uat.yml up --force-recreate
```
* When you need to rebuild your service and deploy new version
```bash
docker-compose -f compose-base.yml -f compose-uat.yml build --no-cache frontend
docker-compose -f compose-base.yml -f compose-uat.yml up --no-deps -d --force-recreate frontend
```