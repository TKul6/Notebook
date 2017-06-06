'use strict';

const EventEmitter = require('events').EventEmitter;

class Server extends EventEmitter{
    constructor() {
        super();

        this.current_id = 1;

        this.tasks = {};
    }


   
    add(args) {
        this.tasks[this.current_id] = args.join(' ');

        this.emit('response', `Task ${this.current_id} was added.`);

        this.current_id++;
    }

    ls(args) {
        this.emit('response', this.tasks);
    }

    delete(args) {
        delete (this.tasks[args[0]]);
        this.emit('response', 'Task was deleted.');
    }

     registerClient(client) {
        client.on('command', (command, args) => {

            this[command](args);
            
        });
    }

}




module.exports = Server;

