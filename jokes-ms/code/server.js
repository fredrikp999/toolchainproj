// Jokes service. Serving jokes!

const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser'); // for shaping JSON objects
const app = express();
const request = require('request');

// Configuration directory used by module configuration is stored in a common folder
// used by all services
// process.env["NODE_CONFIG_DIR"] = __dirname + "/../commonConfig/";
// const config = require('config');

// Earlier we did like below when running directly in the host OS
// Read in configuration data from config-file in ./config/*.js which exports "config"
// Read and store a specific part of the config-data (dictionary) into a constant
// const servicesPorts = config.get('ServicePorts');
// const port = servicesPorts.jokesPort;

// But let's actually hardcode the port. It is anyway exposed through docker to custom port
const port = 3000

// Enable serving of static files stored in the directory 'public' e.g. index.html
app.use(express.static('public'))

// One endpoint we just write back some stuff for
app.get('/v1/jokes/', function (req,res){
    res.send('Hello. Yes, lots of jokes here!');
    console.log("Someone is here... In the jokes endpoint...");
});

// Get data from the MadSLCollector microservice
app.get('/v1/randomjoke/', function (req,res){
    res.send('Hello. Here is a random joke for you!');
    console.log("Someone is here, wanting random jokes...");
});

app.listen(port, () => console.log("Example app listening on port: "+ port));