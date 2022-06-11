/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require("fs");
const { createServer } = require("https");
const next = require("next");

const HOSTNAME = "baolocre.dev";
const PORT = parseInt(process.env.PORT, 10) || 3000;
const isDevEnvironment = process.env.NODE_ENV !== "production";

const app = next({ dev: isDevEnvironment, hostname: HOSTNAME, port: PORT });
const handler = app.getRequestHandler();
const certFolder = "./certs";

const options = {
    key: fs.readFileSync(`${certFolder}/baolocre.dev.pem`),
    cert: fs.readFileSync(`${certFolder}/baolocre.dev.crt`),
};

app.prepare().then(() => {
    createServer(options, handler).listen(
        {
            host: HOSTNAME,
            port: PORT,
        },
        () => {
            // eslint-disable-next-line no-console
            console.log(`> Ready on https://${HOSTNAME}:${PORT}`);
            // eslint-disable-next-line comma-dangle
        }
    );
});
