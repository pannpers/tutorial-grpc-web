const { HelloRequest, HelloReply } = require('./helloworld_pb.js')
const { GreeterClient } = require('./helloworld_grpc_web_pb.js')

const client = new GreeterClient('http://localhost:8080')

const request = new HelloRequest()
request.setName('World')

client.sayHello(request, {}, (err, response) => {
  if (err) {
    console.error('failed to request: ', err)
  } else {
    console.log(response.getMessage())
  }
})
