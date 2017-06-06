const Server = require('./server');
const EventEmitter = require('events').EventEmitter;
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

const client = new EventEmitter();

const server = new Server();

server.on('response', function (data) {
    console.log(data);
});

console.dir(server);



server.registerClient(client);

rl.on('line',(input) =>{

[command, ...args] = input.split(' ');

    client.emit('command',command,args);
} );


