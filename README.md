# node-with-docker
Run your node https application in docker container.
You need to make changes in DockerFile to run your app in docker container.
# To Run your Script
## Go to your node project root directory and run this command 
### <docker build -t myapp .> 
  Here myapp is the name of your app in docker and . means root directory of your node project. It will generate image file.
# To Run your Application in Docker
## Run this command 
### <docker run -p expose-port-no:server-listening-port myapp>
  Here expose-port-no is the port no which you expose in your script file and server-listening is the port which is used to listen the app in server.js. 
  You are mapping your docker port to your node application port and exposing it to the client. Now your application can accessed by port expose-port-no.