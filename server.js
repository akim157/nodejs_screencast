const db = require('db');
db.connect();

const User = require('./user');

function run() {
    const vasya = new User('Вася');
    const petya = new User('Петя');

    vasya.hello(petya);
    console.log(db.getPhrases('Run successful'));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}