const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/status', (request, response) => response.json({clients: clients.length}));

const PORT = 3000;

let clients = [];
let logs = [];

app.listen(PORT, () => {
  console.log(`SpaceLink Events service listening at http://localhost:${PORT}`)
})

function eventsHandler(request, response, next) {
   const headers = {
     'Content-Type': 'text/event-stream',
     'Connection': 'keep-alive',
     'Cache-Control': 'no-cache'
   };
   response.writeHead(200, headers);
   console.log("Connection Client");
   const data = `data: ${JSON.stringify(logs)}\n\n`;
 
   response.write(data);
 
   const clientId = Date.now();
 
   const newClient = {
     id: clientId,
     response
   };
 
   clients.push(newClient);
 
   request.on('close', () => {
     console.log(`${clientId} Connection closed`);
     clients = clients.filter(client => client.id !== clientId);
   });
}
  
app.get('/events', eventsHandler);

function sendEventsToAll(newLog) {
   clients.forEach(client => client.response.write(`data: ${JSON.stringify(newLog)}\n\n`))
}
  
async function addLog(request, respsonse, next) {
  console.log("new log");
  respsonse.send("Copy: "+JSON.stringify(request.query));
   const newFact = request.query;
   logs  = (newFact);
   return sendEventsToAll(newFact);
}
 
app.get('/log', addLog);