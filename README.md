# tutorial-grpc-web
This is tutorial of the gRPC-Web below.
https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld


## Compile protobuf
```sh
protoc -I=. helloworld.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```


```sh
node server.js &
```

```sh
docker build -t helloworld/envoy -f ./envoy.Dockerfile .
docker run -p 8080:8080 helloworld/envoy
```


```sh
```

```sh
```
