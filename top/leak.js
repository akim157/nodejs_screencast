const EventEmitter = require('events').EventEmitter;
const db = new EventEmitter;

db.setMaxListeners(0);

function Request() {
    const self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function(data) {
        console.log(data);
    };

    this.onError = function() {
        self.send('sorry, us problem');
    };

    function onData(info) {
        self.send(info);
    }

    this.end = function() {
        db.removeListener('data', onData);
    };

    db.on('data', onData);

    // db.on('data', function(info) {
    //     self.send(info);
    // });
    //db.emit - этот обработчик data храниться, и так как он связан с Request, request не удаляется из памяти
    //все это тянится через замыкание и поедает память.
    //maxListeners 10
}

setInterval(function() {
    //heapdump - снимак памяти и анализ в хроме
    const request = new Request();
    request.end();
    console.log(process.memoryUsage().heapUsed);
}, 200);