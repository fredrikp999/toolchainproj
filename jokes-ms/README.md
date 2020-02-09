<H1>Service: Jokes</H1>
This is a microservice serving jokes. It reads jokes from a library and can also store new jokes to the library. Served using a REST API

<H2>The basics</H2>
One end-point for getting a joke.
Another end-point for creating new jokes
See OpenAPI specification for details. Example: localhost:3000/v2/jokes

<H2>Development details</H2>
Developed in nodejs using the express module. To prepare environment (if not using the vagrant devenvironment), go to ./code/ and do node init, which will install the modules defined in package.json (e.g. express)

<H2>Files</H2>
commonConfig/defaults.json - contains dictionary used by node e.g. for ports to serve on. Not nice but a start

<H2>Building the docker image</H2>
A Dockerfile in the code directory specify how the image shall be created. Do this by:
> docker build -t skonk/jokes-ms .

<H2>Starting the image using docker</H2>
> docker run -p 3000:3000 -d skonk/jokes-ms


