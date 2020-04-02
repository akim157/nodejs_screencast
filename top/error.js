const util = require('util');

const phrases = {
    "hello": "Hello",
    "world": "World",
};

function PhrasesError(message) {
    this.message = message; //Error.apply(arguments)
    Error.captureStackTrace(this, PhrasesError);
}

util.inherits(PhrasesError, Error);
PhrasesError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrases(name) {
    if (!phrases[name]) {
        throw new PhrasesError('Not this work: ' + name); // HTTP 500, message!
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404, "Not this page"); //HTTP 404
    }
    return util.format('%s, %s!', getPhrases('****'), getPhrases('world'));
}

try {
    const page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.error(e.status, e.message);
    } else {
        //stack = где произошла ошибка, имя файла
        console.error('Error %s\n message: %s\n stack: %s', e.name, e.message, e.stack);
    }
}
