const HTTPServer = require('./index.js');

const server = new HTTPServer();

server.addPage(['', '/'], "PGh0bWw+PGJvZHk+SGVsbG8gV29ybGQhPC9ib2R5PjwvaHRtbD4=", 'base64');

server.start();