const http = require('http');
class HTTPServer {

    static Page = class {
        url;
        content;
        encoding;
        contentType;
        constructor(url, content, encoding, contentType) {
            this.url = url;
            this.content = content;
            this.encoding = encoding;
            this.contentType = contentType;
        }
    }

    #server;
    #port;
    #hostname;
    #serverPages = [];
    /**
     *
     */
    constructor(hostname = "localhost", port = 80, cors = '*') {

        this.#hostname = hostname;
        this.#port = port;

        this.#server = http.createServer(async (req, res) => {
            res.setHeader('Access-Control-Allow-Origin', cors);

            for (const page of this.#serverPages) {
                if (page.url == req.url) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', page.contentType);
                    res.end(page.content, page.encoding);

                    return;
                }
            }

            res.statusCode = 404;

            res.setHeader('Content-Type', "text/plain");
            res.end("404: Not Found", 'base64');
        });
    }

    start = function (func = () => console.log(`Server started on ${this.#hostname}:${this.#port}/`)) {
        this.#server.listen(this.#port, this.#hostname, func);
    }

    /**
     * 
     * @param {String} content 
     * @param {String} encoding base64, utf-8, ...
     * @param {String} contentType
     */
    addPage = function (urls, content, encoding = 'utf-8', contentType = 'text/html') {
        for (const url of urls)
            this.#serverPages.push(new HTTPServer.Page(url, content, encoding, contentType));
    }

    //    addAPI = function () {
    //        this.addPage(content)
    //    }
}

module.exports = HTTPServer;