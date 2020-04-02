// Демо пройстешего применения ЕЕ
// аргумент передается по цепочке
// обработчик срабатывает в том же порядке, в котором назначены

const EventEmitter = require('events').EventEmitter;

const server = new EventEmitter;

server.on('request', function(request) {
    request.approved = true;
});

server.on('request', function(request) {
    console.log(request);
});

server.emit('request', {from: 'Client'});

server.emit('request', {from: 'More clients'});

server.emit('error', new Error()); //throw TypeError