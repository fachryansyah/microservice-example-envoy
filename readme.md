# Microservice Example with Envoy
this is an example of implementation envoy as api gateway for your microservice project

## Instalation
### 1. Install all depedencies in all service
```
$ cd service-user && npm install
$ cd service-product && npm install
```

### 2. Running envoy
```
$ envoy -c envoy.yaml
```