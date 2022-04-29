## Build image
Replace %environmentName% (with development, staging, production, etc), %ip%, %port%

```console
docker build . --tag vehicle_services_frontend__next_js:%environmentName%_$(git rev-parse HEAD) --build-arg PORT=3000 --build-arg NODE_ENV=%environmentName% --build-arg NEXT_PUBLIC_BACKEND_URL=http://ip:port
```
For local development you can use this ip alias: ```host.docker.internal```
Here is an example command, assuming that your backend port is 4000:
```console
docker build . --tag vehicle_services_frontend__next_js:development_$(git rev-parse HEAD) --build-arg PORT=3000 --build-arg NODE_ENV=development --build-arg NEXT_PUBLIC_BACKEND_URL=http://host.docker.internal:4000
```
## Run container
```console
docker run -p 3000:3000 imageId
```