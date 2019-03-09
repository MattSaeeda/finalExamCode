onst express = require('express');
const bodyParser  = require("body-parser");
const server  = express();

server.use(bodyParser.json());


server.post( "POST /messageParrot" ,async (request, response) => {
      var req = request.body.address;
   
      const message = await JSON.stringify(req.body);
      console.log(message);
  response.sendStatus(message);
  
  
  });